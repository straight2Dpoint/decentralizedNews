import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { contractABI, contractAddress } from '../utils/constants';

export const NewsContext = createContext();

const { ethereum } = window;

// Import sample data
import { sampleNews } from '../utils/sampleData';

// IPFS client setup
const projectId = import.meta.env.VITE_INFURA_PROJECT_ID;
const projectSecret = import.meta.env.VITE_INFURA_PROJECT_SECRET;
const auth = 'Basic ' + btoa(projectId + ':' + projectSecret);

const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth
  }
});

export const NewsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState([]);
  const [useSampleData, setUseSampleData] = useState(false);

  const getNewsContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const newsContract = new ethers.Contract(contractAddress, contractABI, signer);
    return newsContract;
  };

  const getAllReports = async () => {
    try {
      setIsLoading(true);
      
      if (useSampleData) {
        setReports(sampleNews);
        setIsLoading(false);
        return;
      }

      if (!ethereum) return alert('Please install MetaMask');

      const newsContract = await getNewsContract();
      const reportsCount = await newsContract.reportsCount();
      const reportsList = [];

      for (let i = 1; i <= reportsCount; i++) {
        const report = await newsContract.getReport(i);
        const ipfsData = await (await fetch(`https://ipfs.io/ipfs/${report.content}`)).json();
        
        reportsList.push({
          id: report.id.toNumber(),
          title: ipfsData.title,
          description: ipfsData.description,
          location: ipfsData.location,
          imageUrl: ipfsData.imageUrl ? `https://ipfs.io/ipfs/${ipfsData.imageUrl}` : null,
          timestamp: ipfsData.timestamp,
          category: ipfsData.category,
          isBreaking: ipfsData.isBreaking,
          isUrgent: ipfsData.isUrgent,
          upvotes: report.votes.toNumber(),
          downvotes: 0, // We'll implement this later
          author: report.author,
          isVerified: report.isVerified
        });
      }

      setReports(reportsList.reverse()); // Latest first
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask');
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllReports();
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask');
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
      getAllReports();
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  const submitReport = async (title, description, location, category, imageFile, isBreaking = false, isUrgent = false) => {
    try {
      if (!ethereum) return alert('Please install MetaMask');
      setIsLoading(true);

      // Upload image to IPFS if provided
      let imageHash = null;
      if (imageFile) {
        const imageResult = await ipfs.add(imageFile);
        imageHash = imageResult.path;
      }

      // Prepare report data
      const reportData = {
        title,
        description,
        location,
        category,
        imageUrl: imageHash,
        timestamp: new Date().toISOString(),
        isBreaking,
        isUrgent
      };

      // Upload report data to IPFS
      const reportResult = await ipfs.add(JSON.stringify(reportData));
      const reportHash = reportResult.path;

      // Submit to blockchain
      const newsContract = await getNewsContract();
      const transaction = await newsContract.submitReport(reportHash);
      await transaction.wait();

      setIsLoading(false);
      getAllReports(); // Refresh the reports list
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      throw new Error('Error submitting report.');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <NewsContext.Provider value={{ 
      connectWallet,
      currentAccount,
      isLoading,
      reports,
      submitReport,
      useSampleData,
      setUseSampleData,
      getAllReports
    }}>
      {children}
    </NewsContext.Provider>
  );
};