require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // dotenv from "dotenv";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
  arbitrumSepolia: {
    url: process.env.ARBITRUM_SEPOLIA_RPC_URL,
    accounts: [process.env.WALLET_PRIVATE_KEY],
  }
},
etherscan: {
  apiKey: process.env.ARBISCAN_APY_KEY
}
};


