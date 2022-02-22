const express = require('express');
const app = express();

const homeRouter = require('./routes/home.js');
const blogRouter = require('./routes/blog.js');
const contattiRouter = require('./routes/contatti.js');

app.use(homeRouter);
app.use(blogRouter);
app.use(contattiRouter);

app.listen(3000);

