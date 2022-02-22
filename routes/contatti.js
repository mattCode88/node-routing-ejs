const express = require('express');
const router = express.Router();

router.get('/contatti', (req, res) => {
    res.send('contatti');
})

module.exports = router;