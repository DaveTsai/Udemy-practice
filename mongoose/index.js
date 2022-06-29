const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movie', { useNewUrlParser: true, useUnifiedTopology: true });


// const movieSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     type: String,
//     ChildSuitable: Boolean
// })

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    type: {
        type: String
    },
    ChildSuitable: {
        type: Boolean
    }
})

const Movie = mongoose.model(`Movie`, movieSchema)
//To add data into the collection
//First option
// const bigShark = new Movie({ name: "BigShark", rating: 4, type: "horror", ChildSuitable: false })
// bigShark.save();

//Second option (bulk insertion)
Movie.insertMany([
    { name: "Alien", rating: 8, type: "Space horror", ChildSuitable: false },
    { name: "Cats", rating: 8, type: "Opera", ChildSuitable: true },
    { name: "Family guys", rating: 5, type: "cartoon", ChildSuitable: false }
])
// ToUpdate
Movie.findOneAndUpdate({ name: Cats }, { rating: 4 })

    .then(data => {
        console.log("It worked");
        console.log(data);
    })
    .catch(err => {
        console.log("NO! It's crashed")
        console.log(err)
    })