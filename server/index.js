const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
const async = require('async')
require('dotenv').config();

const app = express()
app.use(cors());
app.use(express.json());

//  Cloudinary Intergration
const cl_user = process.env.CLUSER;
const cl_key = process.env.CLKEY;
const cl_secret = process.env.CLSECRET;

cloudinary.config({
    cloud_name: cl_user,
    api_key: cl_key,
    api_secret: cl_secret
});

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blockverify'
})

app.post('/create', upload.array('uploaded_file'), function (req, res) {
    console.log(req)

    var wallet = req.body.wallet
    var name = req.body.fname
    var nic = req.body.nic
    var nicfront = req.files[0].path;
    var nicback = req.files[1].path;
    var selfie = req.files[2].path;
    var state = 1

    // Run the three uploads in parallel
    async.parallel({
        frontURL: (done) => {
            cloudinary.uploader.upload(nicfront, function (err, result) {
                console.log("Result: ", result);
                done(null,result.secure_url);
            });
        },
        backURL: (done) => {
            cloudinary.uploader.upload(nicback, function (err, result) {
                console.log("Result: ", result);
                done(null,result.secure_url);
            });
        },
        selfieURL: (done) => {
            cloudinary.uploader.upload(selfie, function (err, result) {
                console.log("Result: ", result);
                done(null,result.secure_url);
            });
        }
    }, (err, urls) => {
        // Insert into MySQL Database
        db.query("INSERT INTO applications (wallet, name, nic, nicfront, nicback, selfie, state) VALUE (?,?,?,?,?,?,?)", [wallet, name, nic, urls.frontURL, urls.backURL, urls.selfieURL, state], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Inserted into MySQL!")
            }
        })
    })
});

app.listen(3001, () => {
    db.connect(function (err) {
        if (err) throw err;
        console.log("Connected to MySQL!");
    });
});