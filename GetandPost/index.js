const express = require(`express`);
const req = require('express/lib/request');
const app = express();
const path = require(`path`)
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set(`views`, path.join(__dirname, `views`))
app.set(`view engine`, `ejs`)


let comments = [
    {
        id: uuidv4(),
        username: `Dave`,
        comment: `Let's have fun!`
    },
    {
        id: uuidv4(),
        username: `Thor`,
        comment: `No way!`
    },
    {
        id: uuidv4(),
        username: `Claire`,
        comment: `Do you believe it?`
    }
]
app.get(`/comments`, (req, res) => {
    res.render(`comments/index.ejs`, { comments });
})
//（需要下面的code以url的形式將使用者引導到建立comments的頁面）//
app.get(`/comments/new`, (req, res) => {
    res.render(`comments/new.ejs`)
})
app.post(`/comments`, (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() })
    // res.send(`Successfully create a post`);
    res.redirect(`/comments`)
    console.log(req.body)
})
app.get(`/comments/:id`, (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render(`comments/show.ejs`, { comment })
})


app.get(`/comments/:id/edit`, (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render(`comments/edit.ejs`, { comment })
})

app.patch(`/comments/:id`, (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id)
    const newComment = req.body.comment
    foundComment.comment = newComment;
    res.redirect(`/comments`)
})

app.delete(`/comment/:id`, (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect(`/comments`)
})

app.get(`/apple`, (req, res) => {
    const { fruits, qty } = req.body;
    res.send(`OK this are your ${qty} of ${fruits}`)
})

app.post(`/apple`, (req, res) => {
    const { fruits, qty } = req.body;
    res.send(`OK this are your ${qty} of ${fruits}`)
})

app.listen(3000, () => {
    console.log(`On port 3000`)
})