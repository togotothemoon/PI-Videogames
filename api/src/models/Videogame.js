const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.INTEGER
    },
    releaseDate: {
      type: DataTypes.INTEGER
    },
    rating: {
      type: DataTypes.INTEGER
    },
    platforms: {
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    }
  });
};
