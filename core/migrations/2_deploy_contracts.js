const fs = require('fs');
const path = require('path');
const Factory = artifacts.require("CustomV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");
module.exports = async function (deployer, network, addresses){
    await deployer.deploy(Factory,addresses[0]);
    const factory = await Factory.deployed();
let token1Address , token2Address;
    if(network ==='mainnet'){
        token1Address = '';
        token2Address= '';
}   
else{
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    token1Address = token1.address;
    token2Address = token2.address;

}
    await factory.createPair(token1Address,token2Address);
// Create an object with deployment data
const deploymentData = {
    network: network,
    factoryAddress: factory.address,
    token1Address: token1Address,
    token2Address: token2Address
};

// Convert the object to JSON format
const jsonData = await JSON.stringify(deploymentData, null, 2);

// Define the file path where the JSON file will be saved
const filePath = path.join(__dirname, 'deploymentData.json');

// Write the JSON data to the file
fs.writeFileSync(filePath, jsonData);

console.log('Deployment data has been written to deploymentData.json');
};