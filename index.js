const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.listen(port, () => {
    console.log('API Running on Port', port);
})