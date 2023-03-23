import './App.css';
import React, { useEffect } from 'react';
import { useState } from "react";
import Axios from 'axios';
import Web3 from 'web3';

function Admin() {

    const [address, setAddress] = useState("")
    const [name, setName] = useState("")
    const [nic, setNIC] = useState("")
    const [nicfront, setNICFront] = useState("")
    const [nicback, setNICBack] = useState("")
    const [selfie, setSelfie] = useState("")


    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null
    })

    useEffect(() => {
        const loadProvider = async () => {
            let provider = null;
            if (window.ethereum) {
                provider = window.ethereum;

                try {
                    await provider.enable();
                } catch (error) {
                    console.error("Not connected to Metamask")
                }

            } else if (window.web3) {
                provider = window.web3.currentProvider

            } else if (!process.env.productio){
                provider = new Web3.providers.HttpProvider("http://localhost:7545")
            }

            setWeb3Api({
                web3: new Web3(provider),
                provider
            })
        }
        loadProvider()
    }, [])

    console.log(web3Api.web3)

    

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




            <nav class="level">
                <div class="level-item has-text-centered">
                    <div class="box">
                        <p class="heading">Pending Applications</p>
                        <p class="title">175</p>
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
                                    <th>Wallet Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tfoot>
                                <tr>
                                    <th><abbr title="Position">#</abbr></th>
                                    <th>Name</th>
                                    <th>Wallet Address</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>

                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Sandaru Fernando</td>
                                    <td>0xd32214ab7ae483Cc0cFCE495E0fFDDadaFe522be</td>
                                    <td><button class="button is-warning">Review</button></td>
                                </tr>
                                {/* <tr>
                                    <th>2</th>
                                    <td>Shimara Amandi</td>
                                    <td>0x096b9632BA5aCcEDb3a823973e4E72671f59ba64</td>
                                    <td><button class="button is-warning">Review</button></td>
                                </tr> */}

                            </tbody>
                        </table>
                    </section></div></div>


        </>
    );
}

export default Admin;