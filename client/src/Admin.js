import './App.css';
import React, { useEffect } from 'react';
import { useState } from "react";
import Web3 from 'web3';
import axios from 'axios';
import BlockVerifyContract from ".//truffle/build/contracts/BlockVerify.json";

function Admin() {

    const [applicationList, setApplicationList] = useState([]);

    useEffect(() => {
        document.getElementById("reviewcontainer").style.display = 'none';

        const getApplications = () => {
            axios.get('http://localhost:3001/applications').then((response) => {
                console.log(response)
                setApplicationList(response.data)
                console.log("Get Request Success!")
            });
        }
        getApplications()
    }, [])

    var deleteID = 0
    function setForm(id, wallet, name, nic, nicfront, nicback, selfie) {
        document.getElementById("reviewcontainer").style.display = 'block';
        document.getElementById("formid").innerHTML = "Application Number: #" + id;
        deleteID = id
        document.getElementById("formwallet").value = wallet;
        document.getElementById("formname").value = name;
        document.getElementById("formnic").value = nic;
        document.getElementById("formnicfront").src = nicfront;
        document.getElementById("formnicback").src = nicback;
        document.getElementById("formselfie").src = selfie;
    }

    const declineRecord = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/delete', {
            applicationID: deleteID,
        }).then(() => {
            console.log("Successfully Deleted!")
            alert("Application Declined Successfully!");
            window.location.reload();
        });
    };

    let provider, Contract, web3 = undefined;
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

    const acceptRecord = async (e) => {
        e.preventDefault();
        console.log("acceptRecord Started")
        const account = await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("Address : " + account[0])

        const item = document.getElementById("formwallet").value
        await Contract.methods.addItem(item).send(
            {
                from: account[0],
            })

        axios.post('http://localhost:3001/delete', {
            applicationID: deleteID,
        }).then(() => {
            console.log("Record Successfully Deleted from MySQL server!")
            alert("Application Accepted Successfully!");
            window.location.reload();
        });
    };

    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img alt='logo' src="logo.png" width="112" height="28" />
                    </a>
                    <div class="navbar-menu" id="navMenu"></div>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href='/'>Home</a>
                        <a class="navbar-item" href='/'>Help</a>
                    </div>
                </div>
            </nav>
            <hr style={{ marginTop: "0px" }} />

            <nav class="level">
                <div class="level-item has-text-centered">
                    <div class="box">
                        <p class="heading">Pending Applications</p>
                        <p class="title">{applicationList.length}</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div class="box">
                        <p class="heading">Total Verified Users</p>
                        <p class="title">1,456</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div class="box">
                        <p class="heading">Ether Balance</p>
                        <p class="title">87.05</p>
                    </div>
                </div>
            </nav>

            <div class="columns">
                <div class="column is-quater is-offset-one-quarter">
                    <section class="section">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th><abbr title="Position">#</abbr></th>
                                    <th>Name</th>
                                    <th>NIC</th>
                                    <th>Wallet Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {applicationList.map((val, key) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{val.id}</td>
                                                <td>{val.name}</td>
                                                <td>{val.nic}</td>
                                                <td>{val.wallet}</td>
                                                <td><button onClick={() => setForm(val.id, val.wallet, val.name, val.nic, val.nicfront, val.nicback, val.selfie)} class="button is-warning">Review</button></td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>

            <div id='reviewcontainer' hidden="">
                <nav class="level">
                    <progress class="progress is-success is-small" value="0" ></progress>
                </nav>
                <div class="columns">
                    <div class="column is-half is-offset-one-quarter">
                        <section class="section">
                            <h1 class="title">Document Submission Form</h1>
                            <form id="formElement" encType="multipart/form-data" method="post">
                                <div class="field">
                                    <label class="label" id='formid'> </label>
                                </div>
                                <div class="field">
                                    <label class="label">Wallet Address</label>
                                    <div class="control">
                                        <input type="text" class="input is-rounded" name='wallet' id="formwallet" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Full Name</label>
                                    <div class="control">
                                        <input type="text" name='fname' id='formname' class="input is-rounded" />
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">NIC Number</label>
                                    <div class="control">
                                        <input type="text" name='nic' class="input is-rounded" id='formnic' />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <label class="label">NIC Front</label><br />
                                    <div class="file is-centered is-boxed is-success has-name">
                                        <img width="325px" class="is-rounded" id='formnicfront' alt='' />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <label class="label">NIC Back</label><br />
                                    <div class="file is-centered is-boxed is-success has-name">
                                        <img width="325px" class="is-rounded" id='formnicback' alt='' />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <label class="label">Selfie</label><br />
                                    <div class="file is-centered is-boxed is-success has-name">
                                        <img width="325px" class="is-rounded" id='formselfie' alt='' />
                                    </div>
                                </div>
                                <br />
                                <div class="field">
                                    <div class="control">
                                        <label class="checkbox">
                                            <input type="checkbox" /> Confirm the details are correct.
                                        </label>
                                    </div>
                                </div>
                                <div class="field is-grouped">
                                    <div class="control">
                                        <button onClick={declineRecord} class="button is-danger is-rounded" style={{ marginRight: "10px" }}>Decline</button>
                                        <button onClick={acceptRecord} class="button is-primary is-rounded">Approve</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
