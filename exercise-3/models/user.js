'use strict';

const { DataTypes, Model } = require('sequelize');
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: 'users',
    tableName: 'users',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = User;
