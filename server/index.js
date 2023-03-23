const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
require('dotenv').config();
const async = require('async')

const cl_user = process.env.CLUSER;
const cl_key = process.env.CLKEY;
const cl_secret = process.env.CLSECRET;

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


app.post('/create', upload.array('uploaded_file'), function (req, res) {
    console.log(req)

    var wallet = req.body.wallet
    var name = req.body.fname
    var nic = req.body.nic
    var nicfront = req.files[0].path;
    var nicback = req.files[1].path;
    var selfie = req.files[2].path;
    var state = 1

    var frontURL = "temp_string"
    var backURL = "temp_string"
    var selfieURL = "temp_string"

    cloudinary.uploader.upload(nicfront, function (err, result) {
        console.log("Result: ", result);
        frontURL = result.secure_url;

        cloudinary.uploader.upload(nicback, function (err, result) {
            console.log("Result: ", result);
            backURL = result.secure_url;

            cloudinary.uploader.upload(selfie, function (err, result) {
                console.log("Result: ", result);
                selfieURL = result.secure_url;
            }).then(() => {
                // Insert into MySQL Database
                db.query("INSERT INTO applications (wallet, name, nic, nicfront, nicback, selfie, state) VALUE (?,?,?,?,?,?,?)", [wallet, name, nic, frontURL, backURL, selfieURL, state], (err, result) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send("Inserted into MySQL!")
                    }
                })
            });
        });
    });

});

app.listen(3001, () => {
    db.connect(function (err) {
        if (err) throw err;
        console.log("Connected to MySQL!");
    });
});