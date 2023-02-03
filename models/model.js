const mongoose = require('mongoose');
const { string } = require('yargs');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is Required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: "Title is Required",
        minlength: 4,
        maxlength: 2000

    }
});

module.exports = mongoose.model("Post", postSchema);