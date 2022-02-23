const express = require('express');
const app = express();

const homeRouter = require('./routes/home.js');
const blogRouter = require('./routes/blog.js');
const contattiRouter = require('./routes/contatti.js');

app.set('view engine', 'ejs');

app.use(homeRouter);
app.use(blogRouter);
app.use(contattiRouter);
app.use(express.static('public'));

app.listen(3000);

