# Hardhat Token Transfers

## Environment Setup

We have used Linux - Ubuntu to setup the initial Hardhat environment.

### Commands

```shell
sudo apt update
sudo apt install curl git
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Setting up a new Hardhat Project

```shell
# Initialize the npm project
npm init
# Install Hardhat
npm install --save-dev hardhat
# Initialize Hardhat project 
npx hardhat init
# Select - 'Create an empty hardhat.config.js' option
# Once the initial project is created, we will install the hardhat-toolbox plugin
#   This plugin provides all the tools needed fro smart contract development
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

Once, the above steps are done, we need to update the `hardhat.config.js` to look like below 

```js
// the below link impors the the toolbox in the project
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
};
```

### Folder Structure

We will be creating 2 folders to start with:
    - contracts
    - test
The contracts folder will hold the smart contracts we develop, and the test folder will contain the tests we write to test the developed smart contracts

### Initial Commands to build and test smart contracts

```shell
# Build a hardhat project 
npx hardhat compile

# Run tests in the test folder
npx hardhat test
```

### Deploying to Live Network

In Progress.
