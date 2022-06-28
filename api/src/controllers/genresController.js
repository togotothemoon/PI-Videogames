const axios = require('axios')
const { Genres } = require('../db')


exports.getAllGenres = async (req, res) => {
    Genres.findAll()
        .then(categories => {
            res.json(categories);
        })
};