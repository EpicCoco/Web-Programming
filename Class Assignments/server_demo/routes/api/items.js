const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => {res.send('testing get / item route')});
router.get('/:id', (req, res) => {res.send('testing get /:id route')});
router.post('/', (req, res) => {res.send('testing post / route')});
router.put('/:id', (req, res) => {res.send('testing put /:id route')});
router.delete('/:id', (req, res) => {res.send('testing delete /:id route')});

module.exports = router;