// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface ICallbacks{
    struct AggregatorAnswer{ uint orderId; uint price; uint spreadP; }
    function openTradeMarketCallback(AggregatorAnswer memory) external;
    function closeTradeMarketCallback(AggregatorAnswer memory) external;
    function executeNftOpenOrderCallback(AggregatorAnswer memory) external;
    function executeNftCloseOrderCallback(AggregatorAnswer memory) external;
    function updateSlCallback(AggregatorAnswer memory) external;
}