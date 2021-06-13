const express = require('express')
const router = express.Router()
const {data} = require('../data/flashcardData.json');
const {cards} = data;


router.get('/', (req, res) => {
    const num = Math.floor(Math.random() * data.cards.length);
    res.redirect(`/cards/${num}?side=question`)
})

router.get('/:id', (req, res) => {
    const {side} = req.query;
    const {id} = req.params;
    
    if(!side) {
        return res.redirect(`/cards/${id}?side=question`)
    }
    const username = req.cookies.username;
    const text = cards[id][side];
    const {hint} = cards[id];
    
    const templateData = {text, hint}

    if (side === 'answer') {
        templateData.hint = false;
        link = 'question'
    } else {
        link = 'answer'
    }
    
    res.render('card', {templateData, link, id, username, side})  
});

module.exports = router;