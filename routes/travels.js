express = require('express');
const router = express.Router();

const travelsData = require('../data/')

//route for travels 
router.get('/', (req, res) => {
    res.json(travelsData);
})

module.exports = router;