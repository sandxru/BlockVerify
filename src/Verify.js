import './App.css';
import React from 'react';

function Verify() {
    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img alt='logo' src="logo.png" width="112" height="28" />
                    </a>

                    {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a> */}

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
                                <input class="input" type="text" placeholder="" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Full Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">NIC Number</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">NIC Front</label>
                            <div class="file is-right field is-fullwidth">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume" />
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">Choose a file</span>
                                    </span>
                                    <span class="file-name">
                                        Screen Shot 2017-07-29 at 15.54.25.png
                                    </span>
                                </label>
                            </div>
                        </div>


                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link">Submit</button>
                            </div>
                            <div class="control">
                                <button class="button is-link is-light">Cancel</button>
                            </div>
                        </div>

                    </section>
                </div>
            </div>




        </>
    );
}

export default Verify;
