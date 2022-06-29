require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const VideogameRoute = require('./videogame')
const GenresRoute = require('./genres')

const router = Router();

router.use('/videogame', VideogameRoute);
router.use('/genres', GenresRoute);

module.exports = router;
