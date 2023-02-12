import './App.css';
import { useState } from "react";
import Axios from 'axios';


function Verify() {

    const [address, setAddress] = useState("")
    const [name, setName] = useState("")
    const [nic, setNIC] = useState("")

    const [nicfront, setNICFront] = useState("")
    const [nicback, setNICBack] = useState("")
    const [selfie, setSelfie] = useState("")


    const submitApplication = () => {
        console.log("start")
        Axios.post('http://localhost:3001/create', {
            address: address,
            name: name,
            nic: nic,
            nicfront: nicfront,
            nicback: nicback,
            selfie: selfie
        }).then(() => {
            console.log("Success")
        });
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
                        <a class="navbar-item" href='/'>Help</a>
                    </div>
                </div>
            </nav>
            <hr style={{ marginTop: "0px" }} />


            <div class="columns">
                <div class="column is-half is-offset-one-quarter">

                    <section class="section">
                        <h1 class="title">Document Submission Form</h1>


                        <div class="field">
                            <label class="label">Wallet Address</label>
                            <div class="control">
                                <input type="text" class="input is-rounded" id="wallet" />
                            </div>
                        </div>

                        <div class="field">
                            <button id="walletbtn" class="button is-primary is-rounded"
                                onClick={async () => {
                                    document.getElementById('walletbtn').className = "button is-primary is-rounded is-loading";
                                    const account = await window.ethereum.request({ method: "eth_requestAccounts" })
                                    setAddress(account[0])
                                    console.log("Account retrieved :", account)

                                    var delayInMilliseconds = 500;

                                    setTimeout(function () {
                                        document.getElementById('wallet').value = account;
                                        document.getElementById('walletbtn').className = "button is-primary is-rounded";
                                        document.getElementById('walletbtn').innerHTML = "Connected";
                                    }, delayInMilliseconds);

                                }}>Connect Wallet</button>
                        </div>


                        <div class="field">
                            <label class="label">Full Name</label>
                            <div class="control">
                                <input type="text" onChange={(event) => {
                                    setName(event.target.value)
                                }} class="input is-rounded" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">NIC Number</label>
                            <div class="control">
                                <input type="text" onChange={(event) => {
                                    setNIC(event.target.value)
                                }} class="input is-rounded" />
                            </div>
                        </div>
                        <br />

                        <div class="field">
                            <label class="label">NIC Front</label><br />
                            <div class="file is-centered is-boxed is-success has-name">
                                <label class="file-label">
                                    <input id="imagefront" name="imagefront" class="file-input" type="file" onChange={(event) => {
                                        setNICFront(event.target.value)
                                    }} />
                                    <span class="file-cta">

                                        <span class="file-label">Choose (JPEG/PNG)</span>
                                    </span>
                                    <span class="file-name is-center">Image.png</span>
                                </label>
                            </div>
                        </div>
                        <br />

                        <div class="field">
                            <label class="label">NIC Back</label><br />
                            <div class="file is-centered is-boxed is-success has-name">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume" />
                                    <span class="file-cta">

                                        <span class="file-label">Choose (JPEG/PNG)</span>
                                    </span>
                                    <span class="file-name is-center">Image.png</span>
                                </label>
                            </div>
                        </div>
                        <br />

                        <div class="field">
                            <label class="label">Upload a selfie with the NIC</label><br />
                            <div class="file is-centered is-boxed is-success has-name">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume" />
                                    <span class="file-cta">

                                        <span class="file-label">Choose (JPEG/PNG)</span>
                                    </span>
                                    <span class="file-name is-center">Image.png</span>
                                </label>
                            </div>
                        </div>
                        <br />

                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox" /> I agree to the <a href="/">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button onClick={submitApplication} class="button is-primary is-rounded">Submit for Review</button>
                            </div>
                        </div>

                    </section>
                </div>
            </div>




        </>
    );
}

export default Verify;
