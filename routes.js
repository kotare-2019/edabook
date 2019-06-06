<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const data = require('./data')
// const fs = require("fs")
=======
const express = require("express");
const router = express.Router();
const data = require("./data");
const fs = require("fs");
>>>>>>> 34ff2ffcac38b0b617a6c99b8c63c161d94b5629

const viewData = {
    data: data
};

//index route
<<<<<<< HEAD
router.get('/', (req, res) => {
    // res.send('is it working?')
    res.redirect('/profiles') // update to redirect to profiles
})

router.get('/profiles', (req, res) => {
    const viewData = {
        data: data
    }
    res.render('home', viewData.data)
=======
router.get("/", (req, res) => {
  // res.send('is it working?')
  res.redirect("/profiles"); // update to redirect to profiles
});
>>>>>>> 34ff2ffcac38b0b617a6c99b8c63c161d94b5629

    router.get("/profiles", (req, res) => {
        const viewData = {
            data: data
        };
        console.log(viewData.data);
        res.render("home", viewData.data);
    });

    router.get("/profiles/:id", (req, res) => {
<<<<<<< HEAD
        const viewData = {
            data: data
        }
=======
  const viewData = {
    data: data
  };
  //console.log(viewData.data);
>>>>>>> 34ff2ffcac38b0b617a6c99b8c63c161d94b5629

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

<<<<<<< HEAD
    router.post('/profiles/edit/:id', (req, res) => {
        console.log(req.body)
=======
router.post("/profile/edit/:id", (req, res) => {
  let update = req.body; //form data
  console.log("REQ BODY: ", update);
>>>>>>> 34ff2ffcac38b0b617a6c99b8c63c161d94b5629

        let profileToUpdate = findInArray(req.params.id);
        console.log("PROFILE TO UPDATE: ", profileToUpdate);

<<<<<<< HEAD
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
=======
  profileToUpdate.name = update.name;
  profileToUpdate.blog = update.blog;
  profileToUpdate.bio = update.bio;

  //Write the entire array back into the JSON file
  writeUpdateToFile(data, () => res.redirect("/profiles/" + req.params.id)); //Redirect goes to urls render to views
});

function findInArray(id) {
  //locate the puppy we are going to update
  return data.profiles.find(item => {
    return item.id == id;
  });
}

function writeUpdateToFile(updateArray, callback) {
  fs.writeFile(
    "data.json",
    JSON.stringify(updateArray, null, 2),
    "utf8",
    err => {
      if (err) throw err;
      console.log("The profile has been updated");
      callback();
    }
  );
}
>>>>>>> 34ff2ffcac38b0b617a6c99b8c63c161d94b5629

    module.exports = router;
