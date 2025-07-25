// filepath: dmcctv/dmcctv/client/src/components/VoteSystem.jsx
import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const VoteSystem = ({ reportId }) => {
    const { voteOnReport } = useContext(NewsContext);

    const handleVote = (isAuthentic) => {
        voteOnReport(reportId, isAuthentic);
    };

    return (
        <div className="vote-system">
            <h3>Vote on Report Authenticity</h3>
            <button onClick={() => handleVote(true)}>Authentic</button>
            <button onClick={() => handleVote(false)}>Not Authentic</button>
        </div>
    );
};

export default VoteSystem;