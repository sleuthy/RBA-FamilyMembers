"use strict";
console.log("main js loaded");

let db = require("./dbinteractions"),
    build = require("./dombuilder"),
    $ = require("jquery"),
    add = require("./addfamily");

// Using the REST API
function loadfamilyToDOM(){
  console.log("Where's your family?");
  db.getFamily()
  .then(function(familyData){
    console.log("got data", familyData);
    build.showFamily(familyData);
  });
}

loadfamilyToDOM();

//submit button to add family member
$(document).on("click", "#submit", function(event){
  let personObj = add.buildFamily();
  db.postFamToFB(personObj)
  .then(function(){
    db.getFamily()
    .then(function(data){
      build.showFamily(data);
      clearInputs();
    });
  });
});

//delete button to delete from FB
$(document).on("click", ".delete-btn", function(event){
  let famID = event.target.id;
  db.deleteFamilyMember(famID)
  .then(function(){
    db.getFamily()
    .then(function(data){
      build.showFamily(data);
    });
  });
});

//clear inputs on submit function
function clearInputs(){
  $("#name").val("");
  $("#age").val("");
  $("#gender").val("");
  $("#skills1").val("");
  $("#skills2").val("");
  $("#skills3").val("");
  $("#skills4").val("");
}
