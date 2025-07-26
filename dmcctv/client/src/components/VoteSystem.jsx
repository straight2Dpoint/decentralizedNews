import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const VoteSystem = ({ reportId }) => {
  const { voteOnReport, currentAccount } = useContext(NewsContext);

  const handleVote = async (isVerified) => {
    try {
      await voteOnReport(reportId, isVerified);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handleVote(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Verify
      </button>
      <button
        onClick={() => handleVote(false)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Dispute
      </button>
    </div>
  );
};

export default VoteSystem;