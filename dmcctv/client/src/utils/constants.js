const API_BASE_URL = "https://decentralized-news-zeta.vercel.app";
const IPFS_URL = "https://ipfs.infura.io/ipfs/";

export const contractAddress = "0xYourNewsContractAddress"; // Replace with your deployed contract address

export const contractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_content",
                "type": "string"
            }
        ],
        "name": "submitReport",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_reportId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_reportId",
                "type": "uint256"
            }
        ],
        "name": "verifyReport",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_reportId",
                "type": "uint256"
            }
        ],
        "name": "getReport",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "content",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "author",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "votes",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isVerified",
                        "type": "bool"
                    }
                ],
                "internalType": "struct News.Report",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "reportsCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];