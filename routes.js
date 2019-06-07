const express = require("express");
const router = express.Router();
const data = require("./data");
const fs = require("fs");


//index route
router.get("/", (req, res) => {
  // res.send('is it working?')
  res.redirect("/profiles"); // update to redirect to profiles
});

router.get("/profiles", (req, res) => {
  const viewData = {
    data: data
  };
  console.log(viewData.data);
  res.render("home", viewData.data);
});

router.get("/profiles/:id", (req, res) => {
  const profile = findInArray(req.params.id);
  res.render("profile", profile);
});
//EDIT ROUTE
router.get("/profiles/edit/:id", (req, res) => {
  const profile = findInArray(req.params.id);
  res.render("edit", profile);
});
//CREATE ROUTE
router.get("/create", (req, res) => {
  res.render("create", {});
});


//EDIT POST
router.post("/profiles/edit/:id", (req, res) => {
  let update = req.body; //form data
  console.log("REQ BODY: ", update);

  let profileToUpdate = findInArray(req.params.id);
  console.log("PROFILE TO UPDATE: ", profileToUpdate);

  profileToUpdate.name = update.name;
  profileToUpdate.blog = update.blog;
  profileToUpdate.bio = update.bio;




  //Write the entire array back into the JSON file
  writeUpdateToFile(data, () => res.redirect("/profiles/" + req.params.id)); //Redirect goes to urls render to views
});

router.post("/create", (req, res) => {
  let newProfile = {
    id: data.profiles.length + 1,
    name: req.body.name,
    blog: req.body.blog,
    bio: req.body.bio,
    image: req.body.image
  };
  data.profiles.push(newProfile);

  writeUpdateToFile(data, () => res.redirect("/profiles")); //Redirect goes to urls render to views
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

module.exports = router;