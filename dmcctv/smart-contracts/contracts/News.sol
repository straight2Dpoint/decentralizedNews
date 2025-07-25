// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract News {
    struct Report {
        uint id;
        string content;
        address author;
        uint votes;
        bool isVerified;
    }

    mapping(uint => Report) public reports;
    mapping(address => mapping(uint => bool)) public hasVoted;
    uint public reportsCount;

    event ReportSubmitted(uint id, string content, address author);
    event Voted(uint reportId, address voter);

    function submitReport(string memory _content) public {
        reportsCount++;
        reports[reportsCount] = Report(reportsCount, _content, msg.sender, 0, false);
        emit ReportSubmitted(reportsCount, _content, msg.sender);
    }

    function vote(uint _reportId) public {
        require(_reportId > 0 && _reportId <= reportsCount, "Report does not exist");
        require(!hasVoted[msg.sender][_reportId], "You have already voted");

        hasVoted[msg.sender][_reportId] = true;
        reports[_reportId].votes++;
        emit Voted(_reportId, msg.sender);
    }

    function verifyReport(uint _reportId) public {
        require(_reportId > 0 && _reportId <= reportsCount, "Report does not exist");
        require(reports[_reportId].votes > 0, "No votes to verify");

        reports[_reportId].isVerified = true;
    }

    function getReport(uint _reportId) public view returns (Report memory) {
        require(_reportId > 0 && _reportId <= reportsCount, "Report does not exist");
        return reports[_reportId];
    }
}