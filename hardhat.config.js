require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            gasPrice: "auto",
            chainId: 43113,
            accounts: ["YOURPRIVATEACOUNTKEY"]
        }
    }
};
