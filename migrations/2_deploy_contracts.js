const PellCoin = artifacts.require("PellCoin");

module.exports = function(deployer) {
    deployer.deploy(PellCoin);
};
