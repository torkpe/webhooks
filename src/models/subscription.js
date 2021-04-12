'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subscription.init({
    url: DataTypes.STRING,
    channelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  Subscription.associate = function(models) {
    Subscription.hasOne(models.Channel, {sourceKey: 'channelId', foreignKey: 'id', as: 'channel'});
  };
  return Subscription;
};