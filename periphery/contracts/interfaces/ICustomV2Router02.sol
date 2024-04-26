pragma solidity >=0.6.2;

import './ICustomV2Router01.sol';

interface ICustomV2Router02 is ICustomV2Router01 {
    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    
}
