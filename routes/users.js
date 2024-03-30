const express = require('express');
const router = express .Router();
const usersData = require('../data/users');




// GET route for retrieving users
router.route('/')
.get((req, res) => {
    res.json(usersData);
})

.post((req, res, next) => {
    if (req.body.fname && req.body.lname && req.body.uname){
        if (usersData.find((u) => u.uname == req.body.uname)) {
            res.json({ error: "Username Already Taken" });
            return;
        }

        const user = {
            id: usersData[usersData.length - 1].id + 1,
            fname: req.body.fname,
            lname: req.body.lname,
            uname: req.body.uname,
        };

        usersData.push(user);
        res.json(usersData[usersData.length -1]);
    } else res.json({error: " No Data found"});

});

router
.route("/:id")
.get((req, res) => {
    const user = usersData.find((u) => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
})

    .patch((req, res) => {
        const userId = req.params.id;
        const userIndex = usersData.findIndex((u) => u.id == userId);

        if (userIndex !== -1) {
            for (const key in req.body) {
                if (Object.hasOwnProperty.call(req.body, key)) {
                    usersData[userIndex][key] = req.body[key];
                }
            }
            res.json(usersData[userIndex]);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    })



.delete((req, res, next) => {
  
   console.log(`deleting user with id: ${req.body.id}`);
 
    const user = usersData.find((u, i) => {
        if (u.id == req.params.id) {
            usersData.splice(i, 1);
            return true;
        }
    });
    if (usersData) res.json(usersData);
    else next();

});


module.exports = router;