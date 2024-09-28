const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
// Here we are building the module using the buildModule command. 
module.exports = buildModule("TokenModule", (m) => {
  const tokenModule = m.contract("Token", []);

  m.call(tokenModule, "isDeployed", []);

  return { tokenModule };
});