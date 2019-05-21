var express = require("express");
var router = express.Router();
var Spot = require("../models/spot");
var middleware = require("../middleware");

//INDEX - show all Spots
router.get("/", function(req, res) {
  // Get all Spots from DB
  Spot.find({}, function(err, allSpots) {
    if (err) {
      console.log(err);
    } else {
      res.render("spots/index", { spots: Spots });
    }
  });
});

//CREATE - add new spot to DB
router.post("/", middleware.isLoggedIn, function(req, res) {
  // get data from form and add to spots array
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newSpot = {
    name: name,
    price: price,
    image: image,
    description: desc,
    author: author
  };
  // Create a new spot and save to DB
  Spot.create(newSpot, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to spots page
      console.log(newlyCreated);
      res.redirect("/spots");
    }
  });
});

//NEW - show form to create new spot
router.get("/new", middleware.isLoggedIn, function(req, res) {
  res.render("spots/new");
});

// SHOW - shows more info about one spot
router.get("/:id", function(req, res) {
  //find the spot with provided ID
  Spot.findById(req.params.id)
    .populate("comments")
    .exec(function(err, foundSpot) {
      if (err) {
        console.log(err);
      } else {
        console.log(foundSpot);
        //render show template with that spot
        res.render("spots/show", { spot: foundSpot });
      }
    });
});

// EDIT SPOT ROUTE
router.get("/:id/edit", middleware.checkSpotOwnership, function(req, res) {
  Spot.findById(req.params.id, function(err, foundSpot) {
    res.render("spots/edit", { spot: foundSpot });
  });
});

// UPDATE SPOT ROUTE
router.put("/:id", middleware.checkSpotOwnership, function(req, res) {
  // find and update the correct spot
  Spot.findByIdAndUpdate(req.params.id, req.body.spot, function(
    err,
    updatedSpot
  ) {
    if (err) {
      res.redirect("/spots");
    } else {
      //redirect somewhere(show page)
      res.redirect("/spots/" + req.params.id);
    }
  });
});

// DESTROY SPOT ROUTE
router.delete("/:id", middleware.checkSpotOwnership, function(req, res) {
  Spot.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/spots");
    } else {
      res.redirect("/spots");
    }
  });
});

module.exports = router;
