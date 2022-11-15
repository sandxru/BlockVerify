import './App.css';
import React, { useEffect } from 'react';

function Verify() {

    // useEffect(() => {
    //     const loadProvider = async () => {
    //         console.log(window.web3);
    //         console.log(window.ethereum);
    //     }
    //     loadProvider();
    // }, [])

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
                        <a class="navbar-item">Home</a>
                        <a class="navbar-item">Help</a>
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
                                <input class="input is-rounded" id="wallet" value="" type="text" placeholder="" desabled/>
                            </div>
                        </div>

                        <div class="field">
                            <button class="button is-primary is-rounded"
                                onClick={async () => {
                                    const account = await window.ethereum.request({method: "eth_requestAccounts"})
                                    console.log(account)
                                    document.getElementById('wallet').value = account;
                                }}>Connect Wallet</button>
                        </div>


                        <div class="field">
                            <label class="label">Full Name</label>
                            <div class="control">
                                <input class="input is-rounded" type="text" placeholder="" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">NIC Number</label>
                            <div class="control">
                                <input class="input is-rounded" type="text" placeholder="" />
                            </div>
                        </div>
                        <br />

                        <div class="field">
                            <label class="label">NIC Front</label><br />
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
                                    <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-primary is-rounded">Submit for Review</button>
                            </div>
                        </div>

                    </section>
                </div>
            </div>




        </>
    );
}

export default Verify;
