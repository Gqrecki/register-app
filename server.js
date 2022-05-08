const express = require("express")

const app = express()

var cors = require('cors')

app.use(cors())

app.use(express.json()); // należy pamiętać o nagłówku w fetch-u

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const fs = require('fs');
const fileName = './json.json';
const json = require(fileName);

// app.use(express.text()) // w razie problemów z danymi użyj text()

app.post("/", function (req, res) {
    if(req.body.login == '' || req.body.password == ''){
        res.send(JSON.stringify("err"))
    }else{
    var data = fs.readFileSync("json.json")
    var myObject = JSON.parse(data)
    var xd = 0

    try{
        if(myObject.users.length == 0){
        }else{
            for(i=0; i<myObject.users.length; i++){
                if((myObject.users[i]).login == req.body.login){
                    xd++
                }
            }
        }
    }catch{}

    if(xd == 0){
        newData = {login:req.body.login, password:req.body.password, data:Date()}
        myObject.users.push(newData)
        fs.writeFile("json.json", JSON.stringify(myObject), function(err){
            if (err) throw err
            res.send(JSON.stringify("complete"))
        })
    }else{
        res.send(JSON.stringify("error"))
    }
    }


    
})

app.get("/users", function (req, res) {
    var data = fs.readFileSync("json.json")
    var myObject = JSON.parse(data)
    var tab = []
    for(i=0; i<myObject.users.length; i++){
        tab.push((myObject.users[i]).login)
    }
    res.send(JSON.stringify(tab))

})

app.post("/details", function (req, res) {
    var data = fs.readFileSync("json.json")
    var myObject = JSON.parse(data)
    var upassword = ''
    var utime = ''
    for(i=0; i<myObject.users.length; i++){
        if((myObject.users[i]).login == req.body.login){
            upassword = (myObject.users[i]).password
            utime = (myObject.users[i]).data
        }
    }
    res.send(JSON.stringify([{password:upassword},{time:utime}]))
})

app.post("/del", function (req, res) {
    var data = fs.readFileSync("json.json")
    var myObject = JSON.parse(data)
    var myObject2 = {users:[]}
    for(i=0; i<myObject.users.length; i++){
        if((myObject.users[i]).login != req.body.login){
            myObject2.users.push(myObject.users[i])
        }
    }
    fs.writeFile("json.json", JSON.stringify(myObject2), function(err){
        if (err) throw err
        res.send(JSON.stringify("complete"))
    })
})

app.listen(2137, function () {
    console.log("start serwera")
})