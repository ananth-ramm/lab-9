'use strict';

const dbConnect = require('../dbConnect');
const sequelize = dbConnect.Sequelize;

const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Like = require('./like');
const Category = require('./category');
const PostCategory = require('./postCategory');

function defineAssociations() {
  User.hasMany(Post, { foreignKey: 'user_id' });
  Post.belongsTo(User, { foreignKey: 'user_id' });

  User.hasMany(Comment, { foreignKey: 'user_id' });
  Comment.belongsTo(User, { foreignKey: 'user_id' });

  Post.hasMany(Comment, { foreignKey: 'post_id' });
  Comment.belongsTo(Post, { foreignKey: 'post_id' });

  User.hasMany(Like, { foreignKey: 'user_id' });
  Like.belongsTo(User, { foreignKey: 'user_id' });

  Post.hasMany(Like, { foreignKey: 'post_id' });
  Like.belongsTo(Post, { foreignKey: 'post_id' });

  Post.belongsToMany(Category, {
    through: PostCategory,
    foreignKey: 'post_id',
    otherKey: 'category_id',
  });

  Category.belongsToMany(Post, {
    through: PostCategory,
    foreignKey: 'category_id',
    otherKey: 'post_id',
  });
}

async function init() {
  defineAssociations();

  await sequelize.sync({ alter: false });
  console.log('✅ Models synced with blog_app');
}

init();

module.exports = {
  User,
  Post,
  Comment,
  Like,
  Category,
  PostCategory,
};
