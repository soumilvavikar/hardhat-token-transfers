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

### Deploying to Hardhat Ignition Network (Local Chain)

Once the project is ready to be deployed and tested, we can deploy to local network.

#### Step 1: Run the below commands in the project's root directory.

```shell
# Step 1: Install the plugin
npm install --save-dev @nomicfoundation/hardhat-ignition-ethers
```

Now to enable the plugin(`@nomicfoundation/hardhat-ignition-ethers`), we need to import it in the config file - `hardhat.config.js`.

##### Step 2: Create the ignition module

```shell
mkdir ignition
mkdir ignition/modules
```

#### Step 3: Create ignition module file

Once, the folder structure is created, lets create our local module and name it `TokenModule`.

#### Step 4: Deploy It

##### Step 4.1: Spin the Local Hardhat Node

```shell
npx hardhat node
```

This will start the local node and in the terminal we can see the dummy accounts, their mapped private keys, and ethers assigned to them. 

##### Step 4.2: Deploy the Hardhat project / contract to the local network

```shell
npx hardhat ignition deploy ignition/modules/TokenModule.js --network localhost

# For 2nd deployment 
npx hardhat ignition deploy ignition/modules/TokenModule.js --network localhost --deployment-id second-deploy
```

**NOTE**:

- PRO TIP: Run this command in the separate terminal.
- If in the above command, the `--network localhost` is not passed, then it by default deploys to local network.
- If you need to do multiple deployments of the contract use `--deployment-id <unique-deployment-id>` along with the command.

### Deploying the Hardhat project / contract to the Remote network

#### Step 1: Setup the variables in the environment for the API KEY and Account's Private key

```shell
npx hardhat vars set ALCHEMY_API_KEY
# Press enter - it will expect you to enter the API KEY now 

npx hardhat vars set SEPOLIA_PRIVATE_KEY
# Press enter - it will expect you to enter the account's private key
```

Read more about the configuration variables [here](https://hardhat.org/hardhat-runner/docs/guides/configuration-variables).

#### Step 2: Update the `hardhat.config.js` file to support the Sepolia Testnet

Check the `hardhat.config.js` file and updates made to the `networks` section in the `module exports` section.

#### Step 3: Deploy

```shell
npx hardhat ignition deploy ./ignition/modules/TokenModule.js --network sepolia
```

#### Step 4: Verify the Deployment

##### Step 4.1: Setup Etherscan API KEY

Add the ether scan key to the configuration variables.

```shell
npx hardhat vars set ETHER_SCAN_KEY
# Press enter, it wille expect you to enter the ether scan key
```

Now setup the `hardhat.config.js` to leverage the etherscan key.

```shell
# Update the config file `hardhat.config.js` to have the following in the `module exports` section.
etherscan: {
    apiKey: <etherscan key>,
},

```

Now, you are ready to verify the deployment. Use the following command.

```shell
# Seploia deployments happen on >> chain-11155111
npx hardhat ignition verify chain-11155111
```

**NOTE**:

- You can also pass `--verify`` to the deploy command to do the verification. 
