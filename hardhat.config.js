require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/nze-Y_Pa043j7zOJkXu08Og5cX-4xuZw",
      accounts: ["9a0aa919e747eaf05c97107c2383228ebd85a94478e7f1cf189cbef4789d54e9"],
    },
  },
};