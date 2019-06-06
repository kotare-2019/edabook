const express = require('express')
const router = express.Router()
const data = require('./data')
// const fs = require("fs")

const viewData = {
    data: data
}

//index route
router.get('/', (req, res) => {
    // res.send('is it working?')
    res.redirect('/profiles') // update to redirect to profiles
})

router.get('/profiles', (req, res) => {
    const viewData = {
        data: data
    }
    res.render('home', viewData.data)

})

router.get("/profiles/:id", (req, res) => {
    const viewData = {
        data: data
    }

    const profile = viewData.data.profiles.find(item => {
        return item.id == req.params.id;
    });
    res.render("profile", profile);
});

router.get("/profiles/edit/:id", (req, res) => {
    const profile = data.profiles.find(function (item) {
        return item.id == req.params.id;
    });
    res.render("edit", profile);
});

router.post('/profiles/edit/:id', (req, res) => {
    console.log(req.body)


    // const profile = viewData.data.profiles.find(item => {
    //     return item.id == req.params.id;
    // });


    // res.render('profile', profile);

})


// router.post("/edit/:id", (req, res) => {
//     const updateProfile = req.body
//     const profile = data.profiles.find(function (item) {
//         return item.id == req.params.id;
//     })

//     Object.assign(profile, updateProfile);

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), "utf8", err => {
//         if (err) throw err;
//         console.log("The profile has been edited");
//     });
//     console.log(updateProfile)

// });

module.exports = router;