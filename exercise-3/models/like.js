'use strict';

const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

Like.init(
  {
    like_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'likes',
    tableName: 'likes',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ['user_id', 'post_id'],
      },
    ],
  }
);

module.exports = Like;
