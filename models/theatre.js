'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class theatre extends Model {
 
    static associate(models) {
      // define association here
      theatre.hasMany(models.screens , {
        foreignKey:'theatreId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  theatre.init({
    theatreName: DataTypes.STRING,
    totalScreens: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    deletedAt:'destroyTime',
    modelName: 'theatre',
  });
  return theatre;
};