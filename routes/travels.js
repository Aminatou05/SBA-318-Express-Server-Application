express = require("express");
const router = express.Router();

const travelsData = require("../data/travels");

//route for travels
router.get("/", (req, res) => {
  res.json(travelsData);
});

module.exports = router;
