require("@nomiclabs/hardhat-waffle")
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan")
require("hardhat-contract-sizer")
require('@typechain/hardhat')
require("hardhat-abi-exporter")
const { GetConfig } = require("./config/getConfig")
let config = GetConfig();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners()
  for (const account of accounts) {
    console.info(account.address)
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost:{
      allowUnlimitedContractSize: true
    },
    hardhat: {
      allowUnlimitedContractSize: true
    },
    arbitrumGoerli: {
      url: config.url.node_rpc[0],
      gas:  50000000,
      gasPrice: 200000000,
      chainId: 421613,
      accounts: [config.address_private.deploy_private]
    },
    arbitrumOne: {
      url: config.url.node_rpc[1],
      gas:  50000000,
      gasPrice: 100000000,
      chainId: 42161,
      accounts: [config.address_private.deploy_private]
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1
          }
        }
      },
    ],
    typechain: {
      outDir: "typechain",
      target: "ethers-v5",
    },
    abiExporter: {
      path: "./abi",
      format: "json"
    }
  },
};

