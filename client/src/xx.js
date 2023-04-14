import './App.css';
import React, { useEffect } from 'react';
import Web3 from 'web3';

import BlockVerifyContract from ".//truffle/build/contracts/BlockVerify.json";

function Admin() {

    let provider = undefined;
    let Contract = undefined;
    let web3;

    const W = async (e) => {
        provider = window.ethereum;
        web3 = new Web3(provider);

        const netId = await web3.eth.net.getId();
        console.log("net id is ", netId);
        Contract = await new web3.eth.Contract(
            BlockVerifyContract.abi, "0x72aA1581ecd763d567bd17e864e5271308326786");
        console.log("The contract : ", Contract);
        console.log("ABI :", BlockVerifyContract.abi);
    }

    W()

    const acceptRecord = async (e) => {
        e.preventDefault();
        console.log("acceptRecord Started")
        const account = await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log(account)

        await Contract.methods.addItem("item").send(
            {
                from: account,
            })
    };

    return (
        <>
            <button onClick={acceptRecord} >Approve</button>
        </>

    );
}

export default Admin;
