'use strict';

const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'posts',
    tableName: 'posts',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Post;
