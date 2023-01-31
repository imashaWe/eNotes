const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    note: {
        type: String,
        required: [true, "Note is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Note', noteSchema);
