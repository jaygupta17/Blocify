const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BlockifyModule", (m) => {
  const blockify = m.contract("Blockify");
  return { blockify };
});
