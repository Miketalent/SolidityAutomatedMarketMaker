import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import fs from "fs";

let mnemonic = fs.readFileSync(".secret").toString().trim();
let infuraProjectID = fs.readFileSync(".infura").toString().trim();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/" + infuraProjectID,
      accounts: {
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
      gasPrice: 4465030,
    },
  },
  solidity: "0.8.18",
};

export default config;
