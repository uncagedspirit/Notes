const express = require('express');
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");
const post = require('./models/post');

app.get("/",(req, res)=>{
    res.send("hello");
})

app.get("/create", async (req, res)=>{
    let user = await userModel.create({
        username: "saakshi",
        age: 22,
        email: "saakshi@gmail.com"
    })

    res.send(user);
})

app.get("/post/create", async (req, res) =>{
    let post = await postModel.create({
        postdata: "hello there",
        user: "67b5673bc0805429fa308c68",  
    })

    let user = await userModel.findOne({_id: "67b5673bc0805429fa308c68"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);