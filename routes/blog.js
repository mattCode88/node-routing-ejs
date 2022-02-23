const express = require('express');
const router = express.Router();

router.get('/blog', (req, res) => {
    const articoli = [
        { titolo: 'Articolo uno', descrizione: 'Primo articolo del blog.' },
        { titolo: 'Articolo due', descrizione: 'Secondo articolo del blog.' },
        { titolo: 'Articolo tre', descrizione: 'Terzo articolo del blog.' }
    ];
    res.render('blog', {
        title: 'Articoli del Blog',
        elencoArticoli: articoli
    });
})

module.exports = router;