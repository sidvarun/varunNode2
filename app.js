const express = require("express");
const app  =  express()
// console.dir(app)

app.use((req, res) => {
    console.log("Hello this is Varun Sidhwani")
    // console.dir(req)
    res.send({name : 'Varun'})
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})