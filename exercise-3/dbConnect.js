'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,      
  process.env.DB_USER,      
  process.env.DB_PASSWORD,  
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(`✅ Connected to MySQL: ${process.env.DB_NAME}`);
  } catch (err) {
    console.error('❌ Unable to connect to MySQL:', err);
    process.exit(1);
  }
};

connectMysql();

module.exports = {
  Sequelize: sequelize,
};
