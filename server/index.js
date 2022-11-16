const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blockverify'
})

app.post('/create', (req, res) => {
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

    db.query("INSERT INTO applications (wallet, name, nic, nicfront, nicback, selfie, state) VALUE (?,?,?,?,?,?,?)", [wallet, name, nic, nicfront, nicback, selfie, state],(err, result)=>{
        if (err){
            console.log(err)
        }else{
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