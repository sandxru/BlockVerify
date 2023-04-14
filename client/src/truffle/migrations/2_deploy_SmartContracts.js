const BlockVerify = artifacts.require("BlockVerify.sol");

module.exports = function (deployer) {
  deployer.deploy(BlockVerify);
};