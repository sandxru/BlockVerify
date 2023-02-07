const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
require('dotenv').config();

const cl_user = process.env.CLUSER;
const cl_key = process.env.CLKEY;
const cl_secret = process.env.CLSECRET;

console.log(cl_user);
console.log(cl_key);
console.log(cl_secret);

const app = express()
app.use(cors());
app.use(express.json());


//  Cloudinary intergration
cloudinary.config({
    cloud_name: cl_user,
    api_key: cl_key,
    api_secret: cl_secret
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blockverify'
})

app.post('/create', (req, res) => {


    // Upload
    cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })


    // Retrieving data from the client
    const wallet = req.body.address
    const name = req.body.name
    const nic = req.body.nic

    // const nicfront  = req.body.nicfront
    // const nicback   = req.body.nicback
    // const selfie    = req.body.selfie
    // const state     = req.body.selfie

    const nicfront = ""
    const nicback = ""
    const selfie = ""
    const state = 1

    db.query("INSERT INTO applications (wallet, name, nic, nicfront, nicback, selfie, state) VALUE (?,?,?,?,?,?,?)", [wallet, name, nic, nicfront, nicback, selfie, state], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Inserted!")
        }
    })
})

app.listen(3001, () => {
    db.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
});