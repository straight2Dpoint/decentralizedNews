import React, { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [reports, setReports] = useState([]);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask');
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // Get all reports
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
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object.');
    }
  };

  const submitReport = async (reportText, location, media) => {
    try {
      if (!ethereum) return alert('Please install MetaMask');
      // IPFS upload logic will go here
      // Smart contract interaction will go here
    } catch (error) {
      console.log(error);
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
      submitReport
    }}>
      {children}
    </NewsContext.Provider>
  );
};