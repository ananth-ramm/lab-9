'use strict';

const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class PostCategory extends Model {}

PostCategory.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'post_categories',
    tableName: 'post_categories',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = PostCategory;
