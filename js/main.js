"use strict";
console.log("main js loaded");

let db = require("./dbinteractions"),
    templates = require("./dombuilder");

// Using the REST API
function loadfamilyToDOM(){
  console.log("Where's your family?");
  db.getFamily()
  .then(function(familyData){
    console.log("got data", familyData);
    // var idArray = Object.keys(songData);
    // idArray.forEach(function(key){
    //   songData[key].id = key;
    // });
    // console.log("song object with id", songData);
    // templates.makeSongList(songData);
  });
}

loadfamilyToDOM();