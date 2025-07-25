const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("News Contract", function () {
  let News;
  let news;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    News = await ethers.getContractFactory("News");
    [owner, addr1, addr2] = await ethers.getSigners();
    news = await News.deploy();
    await news.deployed();
  });

  describe("Submission of news reports", function () {
    it("Should allow users to submit news reports", async function () {
      await news.submitReport("Test Report", "Test Description", { from: addr1.address });
      const report = await news.reports(0);
      expect(report.title).to.equal("Test Report");
      expect(report.description).to.equal("Test Description");
    });
  });

  describe("Voting on reports", function () {
    it("Should allow users to vote on reports", async function () {
      await news.submitReport("Test Report", "Test Description", { from: addr1.address });
      await news.vote(0, true, { from: addr2.address });
      const report = await news.reports(0);
      expect(report.votes).to.equal(1);
    });
  });

  describe("Rewards distribution", function () {
    it("Should distribute rewards to users for valid reports", async function () {
      await news.submitReport("Test Report", "Test Description", { from: addr1.address });
      await news.vote(0, true, { from: addr2.address });
      await news.finalizeReport(0);
      const reward = await news.getReward(addr1.address);
      expect(reward).to.be.greaterThan(0);
    });
  });
});