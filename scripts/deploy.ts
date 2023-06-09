import { ethers } from "hardhat";
import hre from "hardhat";

(async () => {
  try {
    const amm = await hre.ethers.getContractFactory("AMM");
    const ammInstance = await amm.deploy(
      "0xdAC17F958D2ee523a2206206994597C13D831ec7", 
      "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
      ethers.utils.parseEther('1000'),
      ethers.utils.parseEther('1000'),
      ethers.utils.parseEther('0.01'));

    await ammInstance.deployed();

    console.log(
      `Deployed contract at ${ammInstance.address}`
    );
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
})();