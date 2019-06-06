const express = require('express')
const router = express.Router()
const data = require('../data.json')
// const fs = require("fs")

//index route
router.get('/', (req, res) => {
    res.send('is it working?')
//   res.redirect('/profiles') // update to redirect to profiles
})

// router.get('/profiles', (req, res) => {
//   res.render('../views/profiles/index', data) // displays profiles
// })

// router.get("/profiles/:id", (req, res) => {
//   const profile = data.profiles.find(function (item) {
//     return item.id == req.params.id;
//   });
//   res.render("profiles/view", profile);
// });

// router.get("/profiles/edit/:id", (req, res) => {
//   const puppy = data.profiles.find(function (item) {
//     return item.id == req.params.id;
//   });
//   res.render("puppies/edit", puppy);
// });

// router.post("/profiles/edit/:id", (req, res) => {
//   const updateProfile = req.body


//   const profile = data.profiles.find(function (item) {
//     return item.id == req.params.id;


//   })

//     Object.assign(profile, updateProfile);

//   console.log("new value of puppy", profile);
//   console.log("updated array", updateProfile);

//   fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
//     if (err) throw err;
//     console.log("The puppies have been updated");
//     res.render("profiles/edit", profile);
//   });

// });

module.exports = router;