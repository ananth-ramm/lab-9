'use strict';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
require('./dbConnect');    
require('./models');      

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
  res.send('blog_app REST API is running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
