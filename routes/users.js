const express = require('express')
const router = express .Router()


//creating routes for users
router.get('/', (req, res) => {
    console.log( req.query.name)
    res.send("User List")

})

// new user
router.get('/new', (req, res) => { 
    res.render("users/new")

});

//create new user using post method
router.post('/', (req, res) => {
    const isValid = true;
    if(isValid){
       users.push({firstName: req.body.firstName}) 
       res.redirect(`/users/${users.length - 1}`)
    }else{

       console.log("Error")
       res.render('users/new' , {firstName: req.body.firstName})
    }
   

    res.send('hi');
});

router
.route("/:id")
.get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`);
})
.put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
})


.delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
})

//Array of Users
const users = [{name: "Halima"}, {name:"Ahmet"}]
//Using params method
router.param("id", (req, res, next, id) => {
   req.user = users[id]
    next()

})
// these two are doing the same thing 
// this method gets any id inside users
// router.get('/:id', (req, res) => {
//     res.send(`Get user with ID ${req.params.id}`);
// })
// router.put('/:id', (req, res) => {
//     res.send(` Update user with ID ${req.params.id}`);
// })
// router.delete('/:id', (req, res) => {
//     res.send(`Delete user with ID ${req.params.id}`);
// })

module.exports = router;