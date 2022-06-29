const express = require("express");
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
    res.send("hello,world")
    console.log("We got a request with blank route")
})
app.get(`/cat`, (req, res) => {
    res.send("Meow")
    console.log("We got a request with cat route")
})

app.get("/r/:subreddit/:PostID", (req, res) => {
    const { subreddit, PostID } = req.params;
    console.log(`Show you the page with ${PostID}:${subreddit} content`)
    res.send(`<h1>View ID:${PostID} with ${subreddit} contents</h1>`)
})

app.get("/search", (req, res) => {
    const { q } = req.query;
    console.log(req.query)
    res.send(`<h1>Search result for ${q}</h1>`)
})

app.get(`/dog`, (req, res) => {
    res.send("woof")
    console.log("We got a request with dog route")
})
// app.get(`*`, (req, res) => {
//     res.send("All request accepted")
//     console.log("We got a request with any route")
// })
// app.use((req, res) => {
//     console.log("We got a request!")
//     res.send("HI, we got your request")
// })


app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})

