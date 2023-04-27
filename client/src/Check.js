import './App.css';
import React, { useEffect } from 'react';
import Web3 from 'web3';
import BlockVerifyContract from ".//truffle/build/contracts/BlockVerify.json";

function Check() {

    useEffect(() => {
        document.getElementById("verified").style.display = 'none';
        document.getElementById("notverified").style.display = 'none';
    })

//  Reset Buttons
    function resetButtons() {
        document.getElementById("verified").style.display = 'none';
        document.getElementById("notverified").style.display = 'none';
    }

//  Web3 Configuration
    let provider, Contract, web3, items = undefined;
    const Web3Config = async (e) => {
        provider = window.ethereum;
        web3 = new Web3(provider);
        const netId = await web3.eth.net.getId();
        Contract = new web3.eth.Contract(
            BlockVerifyContract.abi,
            BlockVerifyContract.networks[netId].address
        );
    }
    Web3Config()

    const checkStatus = async (e) => {
        e.preventDefault();
        resetButtons()

        // Call getItems Function from the Smart Contract
        items = await Contract.methods.getItems().call();
        console.log("Items : ", items);

        const addresscheck = document.querySelector("#wallet").value
        console.log("Address to Check : " + addresscheck)

        if (items.includes(addresscheck)) {
            console.log("Verified")
            document.getElementById("verified").style.display = 'block';
        } else {
            console.log("Not Verified")
            document.getElementById("notverified").style.display = 'block';
        }
    };

    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img alt='logo' src="logo.png" width="112" height="28" />
                    </a>
                    <div class="navbar-menu" id="navMenu">
                    </div>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href='/'>Home</a>
                    </div>
                </div>
            </nav>
            <hr style={{ marginTop: "0px" }} />
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <section class="section">
                        <h1 class="title">Check Verification Status</h1>
                        <form id="formElement" encType="multipart/form-data" method="post">
                            <div class="field">
                                <label class="label">Wallet Address</label>
                                <div class="control">
                                    <input type="text" class="input is-rounded" name='wallet' id="wallet" />
                                </div>
                            </div>

                            <div class="field">
                                <button id="checkbtn" class="button is-primary is-rounded"
                                    onClick={checkStatus}>Check</button>
                            </div>
                        </form>
                        <br></br>
                        <button id="verified" class="button is-success is-rounded" >Fully Verified</button>
                        <button id="notverified" class="button is-danger is-rounded" >Not Verified</button>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Check;
