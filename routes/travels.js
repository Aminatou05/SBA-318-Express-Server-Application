express = require("express");
const router = express.Router();

const travelsData = require("../data/travels");

router
    .route("/")
    .get((req, res) => {
        if (req.query.subject) {
            console.log(req.query.subject);
            console.log(travelsData)
            const subjtravels = travelsData.filter((travels) => travels.subject == req.query.subject);
            res.json(subjtravels)
        }
        res.json(travelsData);
    })

module.exports = router;




