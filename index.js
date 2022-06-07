const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//connect to mongodb
const dbURI = 'mongodb+srv://suman09:suman09@web-based-map.wz9z9.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // ; hatya ha dhyan rakhna
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        latitude: 20.000,
        longitude: 30.000,
        name: 'First place',
        note: 'This is very beautiful place'
    });

    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});

app.get('/', (req, res) => {
res.render('index');
});

// app.listen(3000);