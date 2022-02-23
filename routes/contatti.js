const express = require('express');
const router = express.Router();

router.get('/contatti', (req, res) => {
    res.render('contatti', {
        title: 'Contatti',
        telefono: 123456789,
        mail: 'paperino@mail.com'
    });
})

module.exports = router;