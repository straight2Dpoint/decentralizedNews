# DMCCTV - Decentralized Marites (News)

DMCCTV is a full-stack decentralized application (dApp) that allows users to submit local reports, vote on their authenticity, and earn rewards. This project leverages the power of blockchain technology to ensure transparency and trust in local news reporting.

## Features

- **User Submission**: Users can submit news reports, including media uploads to IPFS.
- **Voting System**: Community members can vote on the authenticity of reports, helping to filter out misinformation.
- **Rewards**: Users earn rewards for participating in the voting process and submitting reports.
- **Decentralized Architecture**: Built on blockchain technology to ensure data integrity and security.

## Project Structure

```
dmcctv
├── client
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── utils
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── smart-contracts
│   ├── contracts
│   ├── scripts
│   ├── test
│   ├── hardhat.config.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Hardhat

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd dmcctv
   ```

2. Install client dependencies:
   ```
   cd client
   npm install
   ```

3. Install smart contract dependencies:
   ```
   cd smart-contracts
   npm install
   ```

### Running the Application

1. Start the client application:
   ```
   cd client
   npm run dev
   ```

2. Deploy the smart contracts:
   ```
   cd smart-contracts
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.