const Router = artifacts.require("CustomV2Router02.sol");
const WETH = artifacts.require("WETH.sol");
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const { FACTORY_ADDRESS } = process.env;
module.exports = async function (deployer,network){
    let weth; 

    if(network === 'mainnet'){
        weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    }
    else{
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }
    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
    const router = await Router.deployed();

    // Create an object with deployment data
    const deploymentData = {
        network: network,
        routerAddress: router.address,
        wethAddress: weth.address
    };

    // Convert the object to JSON format
    const jsonData = JSON.stringify(deploymentData, null, 2);

    // Define the file path where the JSON file will be saved
    const jsonFilePath = path.join(__dirname, 'deploymentData.json');

    // Write the JSON data to the file
    fs.writeFileSync(jsonFilePath, jsonData);

    console.log('Deployment data has been written to deploymentData.json');

   
};