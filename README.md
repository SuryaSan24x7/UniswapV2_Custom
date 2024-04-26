# Project Structure 
#### UniswapV2
## Core
The `core` directory contains the core contracts of the custom Uniswap V2 implementation.

### Contracts
- **CustomV2ERC20.sol**: This contract implements the ERC20 interface with custom functionalities.
- **CustomV2Factory.sol**: This contract is the factory contract responsible for creating pairs and deploying new ERC20 tokens.
- **CustomV2Pair.sol**: This contract represents a pair of tokens in the Uniswap V2 ecosystem.
- **Token1.sol** and **Token2.sol**: These contracts represent ERC20 tokens used in the Uniswap V2 ecosystem.

### Interfaces
- **ICustomV2Callee.sol**: Interface for the contract called during token swaps.
- **ICustomV2ERC20.sol**: Interface for the ERC20 token contract.
- **ICustomV2Factory.sol**: Interface for the factory contract.
- **ICustomV2Pair.sol**: Interface for the pair contract.
- **IERC20.sol**: Interface for the ERC20 standard.
- **IWETH.sol**: Interface for the Wrapped Ether (WETH) contract.

### Libraries
- **Math.sol**: Library for mathematical operations.
- **SafeMath.sol**: Library for safe mathematical operations.
- **UQ112x112.sol**: Library for fixed-point arithmetic.

### Test
- **ERC20.sol**: ERC20 token contract used for testing.

### Migrations
- **2_deploy_contracts.js**: Migration script for deploying contracts.
- **deploymentData.json**: JSON file containing deployment data.
- **deploymentData.txt**: Text file containing deployment data.

## Periphery
The `periphery` directory contains contracts related to the periphery of the custom Uniswap V2 implementation.

### Contracts
- **CustomV2Router01.sol** and **CustomV2Router02.sol**: These contracts represent the router contracts for interacting with the Uniswap V2 ecosystem.
- **WETH.sol**: This contract represents the Wrapped Ether (WETH) token.

### Interfaces
- **ICustomV2Factory.sol**: Interface for the factory contract.
- **ICustomV2Router01.sol** and **ICustomV2Router02.sol**: Interfaces for the router contracts.
- **IERC20.sol**: Interface for the ERC20 standard.
- **IWETH.sol**: Interface for the Wrapped Ether (WETH) contract.
- **V1**: Directory containing interfaces for Uniswap V1 contracts.

### Libraries
- **SafeMath.sol**: Library for safe mathematical operations.
- **UniswapV2Library.sol**, **UniswapV2LiquidityMathLibrary.sol**, and **UniswapV2OracleLibrary.sol**: Libraries for Uniswap V2 functionalities.

### Test
- Contracts used for testing.

### Migrations
- Migration scripts for deploying contracts.
- **deploymentData.json**: JSON file containing deployment data.
- **deploymentData.txt**: Text file containing deployment data.

## General
- **package.json** and **package-lock.json**: NPM package files.
- **test**: Directory for tests.
- **truffle-config.js**: Truffle configuration file specifying Solidity compiler version.

This project implements the core and periphery contracts of a custom Uniswap V2 ecosystem, including factories, routers, ERC20 tokens, and supporting libraries. The contracts are deployed using Truffle migrations, and deployment data is stored in JSON and text files for reference.
Certainly! Here are the instructions for running the project:

---

# Running the Project

To run this project, follow these steps:

To run this project, follow these steps:

1. **Create Alchemy Account, Metamask Wallet, and etherscan Account**:
   - Create an account on [Alchemy](https://alchemy.com/) to get an API key.
   - Install [Metamask](https://metamask.io/) extension in your browser and create a wallet.
   - Create an account on [Etherscan](https://etherscan.io/) to generate an API key.

2. **Create `.env` File**:
   - Create a `.env` file in the root directory using `.env.example` as a template.
   - Provide your Alchemy API key and account private key in the `.env` file.
   - Set the `ALCHEMY_URL` variable to `'https://eth-sepolia.g.alchemy.com/v2/{API_Key}'`.
   - Add your Etherscan API key to the `.env` file.
   - In the periphery folder, add the factory contract address to the `.env` file.

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Deploy Contracts**:
   - Use Truffle to deploy the contracts.
   - Run the following command:
     ```bash
     truffle migrate --network sepolia
     ```
5. **Verify Contracts**
   - For verification, ensure you have added your Etherscan API key to the .env file.
   - Run the following command to verify a contract:
    ```bash
   truffle run verify <ContractName> --network <networkName>
   ```
   - Replace <ContractName> with the name of your contract and <networkName> with the network on which the contract was deployed.

