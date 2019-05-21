var mongoose = require("mongoose");
var Spot = require("./models/spot");
var Comment = require("./models/comment");

var data = [
  {
    name: "Eiffel Tower",
    image: "https://live.staticflickr.com/8540/8932464892_2bab24a3ef_k.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    name: "Taj Mahal",
    image: "https://live.staticflickr.com/3663/5713000090_62cedd6764_b.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
];

function seedDB() {
  //Remove all spots
  Spot.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed spots!");
    //  //add a few spots
    // data.forEach(function(seed){
    //     Spot.create(seed, function(err, spot){
    //         if(err){
    //             console.log(err)
    //         } else {
    //             console.log("added a spot");
    //             //create a comment
    //             Comment.create(
    //                 {
    //                     text: "Awesome, beatiful place. Too many tourists here though",
    //                     author: "John Smith"
    //                 }, function(err, comment){
    //                     if(err){
    //                         console.log(err);
    //                     } else {
    //                         spot.comments.push(comment);
    //                         spot.save();
    //                         console.log("Created new comment");
    //                     }
    //                 });
    //         }
    //     });
    // });
  });
  //add a few comments
}

module.exports = seedDB;
