const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //Schema defined the stucture of the model that we r gonna like to store in a collection

const blogSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); //module name should be singular of the collection name in this case Blogs is the collection name and Blog is the model name and model name should start with Capital letter like 'B'
module.exports = Blog;