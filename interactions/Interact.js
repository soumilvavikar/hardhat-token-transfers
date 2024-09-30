require("hardhat");

async function main() {
    // Account that is used by ignition to deploy the contract
    const accountDeployingContract = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
    // Deployed Contract address here. 
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    // This line will help retrieve the contract
    const tokenContract = await hre.ethers.getContractAt("Token", contractAddress);
    
    // Execute the transfer function
    const transfer = await tokenContract.transfer("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 100);
    console.log("Transfer Trx hash:", transfer.hash);

    // Check the balance of the target account after the transfer is made
    const balanceOfReciever = await tokenContract.balanceOf("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")
    console.log("Balance - Reciever's account:  ", balanceOfReciever);

     // Check the balance of the source (address on which contract is deployed) account after the transfer is made
     const balanceOf = await tokenContract.balanceOf(accountDeployingContract)
     console.log("Balance - Sender's account:  ", balanceOf);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });