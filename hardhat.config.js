require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config({path: __dirname + '/.env'});
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    mumbai: {
     
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]

     
    }
  },
};
