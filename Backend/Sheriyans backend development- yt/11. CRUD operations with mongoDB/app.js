const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send("hey");
})

//asynchronous operation to create a user 
//by default mongoose operations are async
/*
app.get('/create', (req, res)=>{
    userModel.create({
        name: "Saakshi",
        username: "saakshik",
        email: "sdk@gmail.com"
    })
})
*/

//similar synchronous operation
app.get('/create', async (req, res) => {
    let existingUser = await userModel.findOne({ username: "saakshik" });
    if (existingUser) return res.send("User already exists");
    
    let createdUser = await userModel.create({
        name: "Saakshi",
        username: "saakshik",
        email: "sdk@gmail.com"
    });

    res.send(createdUser);
});


app.get('/update', async (req, res)=>{
    let updatedUser = await userModel.findOneAndUpdate({username: "saakshik"}, {name: "Saakshi kobarne"},{new: true});

    res.send(updatedUser);
})

app.get('/read', async (req, res)=>{
    let users = await userModel.find();
    res.send(users);
})

app.get('/delete', async (req, res) =>{
    let users = await userModel.findOneAndDelete({username: "saakshik"});
    res.send(users);
})

app.get('/deleteAll', async (req, res) => {
    await userModel.deleteMany({});
    res.send("All users deleted");
});


app.listen(3000);