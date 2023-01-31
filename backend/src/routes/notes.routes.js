const express = require('express');
const Note = require('../models/note');

const router = express.Router();

router.post('/', (req, res) => {
    const {title, note} = req.body;
    const noteDoc = new Note({
        title,
        note
    });
    noteDoc.save()
        .then(newNote => res.status(200).json({"message": "New note added"}))
        .catch(e => res.status(200).json({"status": 0, "error": e.message}));
});

router.get('/', (req, res) => {
    Note.find({})
        .then(notes => res.json(notes))
        .catch(e => res.status(200).json({"status": 0, "error": e.modules}));
});

router.post('/:id', (req, res) => {
    const {title, note} = req.body;
    Note.updateOne({id: req.params.id}, {title, note})
        .then(updatedNote => res.status(200).json({"message": "Note updated"}))
        .catch(e => res.status(200).json({"status": 0, "error": e.message}));
});

router.post('')
module.exports = router;
