// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Rewards {
    mapping(address => uint256) public rewards;
    mapping(address => bool) public hasClaimed;

    event RewardIssued(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    function issueReward(address user, uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        rewards[user] += amount;
        emit RewardIssued(user, amount);
    }

    function claimReward() external {
        require(rewards[msg.sender] > 0, "No rewards to claim");
        require(!hasClaimed[msg.sender], "Rewards already claimed");

        uint256 amount = rewards[msg.sender];
        hasClaimed[msg.sender] = true;
        rewards[msg.sender] = 0;

        // Transfer the reward to the user (implementation depends on the reward token)
        // Example: rewardToken.transfer(msg.sender, amount);

        emit RewardClaimed(msg.sender, amount);
    }

    function getRewardBalance() external view returns (uint256) {
        return rewards[msg.sender];
    }
}