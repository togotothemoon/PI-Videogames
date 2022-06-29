require('dotenv').config();
const { Router } = require('express');
const axios = require('axios');
const { REACT_APP_API_KEY } = process.env;
const { Videogame, Genres } = require('../db');

const router = Router();

router.get('/', async (req,res)=>{

   let videogameDb = await Videogame.findAll({
      include: Genres
  });
  //Parseo el objeto
  videogameDb = JSON.stringify(videogameDb);
  videogameDb = JSON.parse(videogameDb);
  //Aca dejo el arreglo de generos plano con solo los nombres de cada genero(llega array de objetos)
  videogameDb = videogameDb.reduce((acc, el) => acc.concat({
      ...el,
      genres: el.genres.map(g => g.name)
  }), [])

  try {
   let pages = 0;
   let results = [...videogameDb]; //sumo lo que tengo en la DB
   let response = await axios.get(`https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`);
   while (pages < 6) {
       pages++;
       //filtro solo la DATA que necesito enviar al FRONT
       const gammesREADY = response.data.results.map(game => {
      return{
         id: game.id,
         name: game.name,
         background_image: game.background_image,
         rating: game.rating,
               genres: game.genres.map(g => g.name)
      }
   });
       results = [...results, ...gammesREADY]
       response = await axios.get(response.data.next) //vuelvo a llamar a la API con next
   }
   return res.json(results)
} catch (err) {
   console.log(err)
   return res.sendStatus(500)
}

});

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
