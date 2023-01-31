const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/enotes');

app.use(cors());
app.use(bodyParser());

app.use('/note', require('./src/routes/notes.routes'));

app.listen(port, () => {
    console.log(`Backend is running on port:${port}`);
});
