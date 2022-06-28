const { Router } = require('express');
const videogame = require('../controllers/videogameController');


const router = Router();

router.get('/videogame',
   videogame.getAllVideogames
);

// router.get('/videogame/orderAsc',
//     videogame
// );
// router.get('/videogame/orderDesc',
//     videogame
// );

// router.get('/videogame/filtAPI',
//     videogame
// );

// router.get('/videogame/filtOwn',
//     videogame
// );


// router.post('/videogame',
//     pokemon.addNewPokemon
// )

// router.get('/videogame/:id',
//     pokemon.getPokemonById
// )

module.exports = router;
