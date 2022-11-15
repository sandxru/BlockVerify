import './App.css';
import React from 'react';

function Home() {
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

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary" href='/verify'>
                                    <strong>Get Verified</strong>
                                </a>
                                <a class="button is-light" href='admin'>
                                    Admin Login
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <hr style={{ marginTop: "0px" }} />
        </>
    );
}

export default Home;
