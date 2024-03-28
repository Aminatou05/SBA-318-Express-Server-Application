const express = require('express')
const router = express.Router()

//creating routes for users
router.get('/', (req, res) => {
    res.send("User List")
})
// new user
router.get('/new', (req, res) => {
    res.send("User New Form")
});


module.exports = router;