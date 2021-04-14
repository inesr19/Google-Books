const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema ({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;