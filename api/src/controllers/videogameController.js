const axios = require('axios');
const { REACT_APP_API_KEY } = process.env;
exports.getAllVideogames = async (req, res) => {
    try {   
        const api = await axios.get(`https://api.rawg.io/api/games?limit=30&key=${REACT_APP_API_KEY}`)
        api.then((res)=>{
            console.log(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
    }

}