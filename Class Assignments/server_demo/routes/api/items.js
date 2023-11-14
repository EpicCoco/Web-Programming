const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({noitemsfound: "No Items found"}));
});
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({noitemfound: 'No Item found'}));    
});
router.post('/', (req, res) => {
    console.log(req.body);
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item successfully added'}))    
    .catch((err) => {
        console.log(err.body);
        res.status(400).json({error: 'Unable to add item'})
    });
});

router.put('/:id', (req, res) => {res.send('testing put /:id route')});
router.delete('/:id', (req, res) => {res.send('testing delete /:id route')});

module.exports = router;