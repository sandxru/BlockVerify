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
                    <div class="navbar-menu" id="navMenu">
                    </div>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href='/'>Home</a>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary is-rounded" href='/verify'>
                                    <strong>Get Verified</strong>
                                </a>
                                <a class="button is-danger is-rounded" href='/check'>
                                    Check Status
                                </a>
                                <a class="button is-light is-rounded" href='/admin'>
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
