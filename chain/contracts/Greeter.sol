// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    constructor(string memory _greeter){
        greeting = _greeter;
    }

    function greet()
            public view returns (string memory) 
    {
        return greeting;    
    }
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
