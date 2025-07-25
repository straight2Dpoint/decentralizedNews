const hre = require("hardhat");

async function main() {
    const News = await hre.ethers.getContractFactory("News");
    const news = await News.deploy();

    await news.deployed();
    console.log("News contract deployed to:", news.address);

    const Rewards = await hre.ethers.getContractFactory("Rewards");
    const rewards = await Rewards.deploy();

    await rewards.deployed();
    console.log("Rewards contract deployed to:", rewards.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });