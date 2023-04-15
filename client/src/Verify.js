import './App.css';
import axios from 'axios';

function Verify() {

    const submitApplication = (e) => {
        e.preventDefault();
        var form = document.querySelector("#formElement");
        console.log(form)
        const formData = new FormData(form);
        axios.post('http://localhost:3001/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(() => {
            console.log("Successfully Sent!")
            alert("Successfully Sent!");
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
                        <form id="formElement" encType="multipart/form-data" method="post">
                            <div class="field">
                                <label class="label">Wallet Address</label>
                                <div class="control">
                                    <input type="text" class="input is-rounded" name='wallet' id="wallet" />
                                </div>
                            </div>
                            <div class="field">
                                <button id="walletbtn" class="button is-primary is-rounded"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        document.getElementById('walletbtn').className = "button is-primary is-rounded is-loading";
                                        const account = await window.ethereum.request({ method: "eth_requestAccounts" })
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
                                    <input type="text" name='fname' class="input is-rounded" />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">NIC Number</label>
                                <div class="control">
                                    <input type="text" name='nic' class="input is-rounded" />
                                </div>
                            </div>
                            <br />
                            <div class="field">
                                <label class="label">NIC Front</label><br />
                                <div class="file is-centered is-boxed is-success has-name">
                                    <label class="file-label">
                                        <input name="uploaded_file" class="file-input" type="file" />
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
                                        <input class="file-input" type="file" name="uploaded_file" />
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
                                        <input class="file-input" type="file" name="uploaded_file" />
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
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Verify;
