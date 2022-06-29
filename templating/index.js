
const express = require(`express`);
const app = express();
const ejs = require(`ejs`);
const path = require(`path`);
const data = require(`./data.json`)

app.use(express.static(path.join(__dirname, `/public`)))

app.set(`view engine`, `ejs`)
app.set(`views`, path.join(__dirname, `/view`))

app.get(`/`, (req, res) => {
    res.render(`home.ejs`)
})
app.get(`/random`, (req, res) => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    res.render(`random.ejs`, { rand: randomNum })
})

app.get(`/r/:subreddit`, (req, res) => {
    const { subreddit } = req.params;
    const subData = data[subreddit];
    if (subData) {
        res.render(`subreddit.ejs`, { ...subData });
    }
    else {
        res.render(`error.ejs`, { subreddit })
    }
})

app.get(`/cats`, (req, res) => {
    const cats = [`Milk`, `Jolin`, `Miana`, `Doky`, `Josh`]
    res.render(`cats.ejs`, { cats })
})

app.listen(3000, () => {
    console.log(`Listening`)
})