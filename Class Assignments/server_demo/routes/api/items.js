var bodyParser = require("body-parser");
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
router.post('/', bodyParser.json(), (req, res) => {
    console.log(req.body);
    Item.create(req.body)
    .then((item) => res.json({msg: 'Item successfully added'}))    
    .catch((err) => {
        console.log(err.body);
        res.status(400).json({error: 'Unable to add item'})
    });
}); 

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({msg: 'Updated successfully'}))
    .catch((err) => res.status(400).json({error: 'Unable to update database'}))
});
router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then((item) => res.json({msg: 'Item entry deleted successfully'}))
    .catch((err) => res.status(400).json({error: 'No such item'}))
});

module.exports = router;