const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'HomePage',
        intestazione: 'Homepage App',
        info: 'App sviluppata in Node.js.'
    });
})

module.exports = router;