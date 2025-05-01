const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())

const Users_File = path.join(__dirname,'users.json');

const ReadUsers = () => {
    const data = fs.readFileSync(Users_File, 'utf-8');
    return JSON.parse(data);
};

const WriteUser = (users) => {
    fs.writeFileSync(Users_File,JSON.stringify(users, null, 2));
};

app.post('/Register', (req, res) => {
    const { name, email } = req.body;
    const users = ReadUsers(); 
    console.log(users);

    if(users.find(user => user.name === name)){
     return res.status(400).send('Den brugernavn eksister allerede');
    }
    users.push({name, email});
   

    WriteUser(users);

    res.status(201).send('Din bruger er blevet opretet');
});

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
