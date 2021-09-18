const express = require("express");
const app  =  express();
const path = require('path');
// console.dir(app)
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))

// app.use((req, res) => {
//     console.log("Hello this is Varun Sidhwani")
//     // console.dir(req)
//     res.send({name : 'Varun'})
// })
app.post('/r/:subreddit', (req,res) => {
    console.log(req.body)
    const data = req.body;
    res.send(data)
})

app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params
    const {name, age} = req.query
    // res.send(`<h1>This is a ${subreddit} subreddit </h1> and username is ${name} and age is ${age}`)
    
    // res.render('home.ejs')

    let num = Math.random();
    // res.render('home.ejs', {rand : num})
    // res.render('home.ejs', {num : num})
    res.render('home.ejs', { num })



})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})