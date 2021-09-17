const express = require("express");
const app  =  express();
const path = require('path');
// console.dir(app)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// app.use((req, res) => {
//     console.log("Hello this is Varun Sidhwani")
//     // console.dir(req)
//     res.send({name : 'Varun'})
// })

app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params
    const {name, age} = req.query
    // res.send(`<h1>This is a ${subreddit} subreddit </h1> and username is ${name} and age is ${age}`)
    res.render('home.ejs')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})