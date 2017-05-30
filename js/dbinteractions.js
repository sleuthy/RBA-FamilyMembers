"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

let firebase = require("./firebaseConfig"),
    $ = require("jquery");

// ****************************************
// DB interaction using Firebase REST API
// ****************************************

function getFamily(data) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family/.json`
		}).done(function(familyData){
			resolve(familyData);
		}).fail(function(error){
			reject(error);
		});
	});
}

function addFamilyMember(personObj) {
	console.log("add family member", personObj);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family/.json`,
			type: 'POST',
			data: JSON.stringify(personObj),
			dataType: 'json'
		}).done(function(famID){
			resolve(famID);
		});
	});
}
// // POST - Submits data to be processed to a specified resource. Takes one parameter.

function postFamToFB(personObj) {
	console.log("add person object", personObj);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family.json`,
			type: 'POST',
			data: JSON.stringify(personObj),
			dataType: 'json'
		}).done(function(famID){
			resolve(famID);
		});
	});
}

function deleteFamilyMember(famID) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family/${famID}.json`,
			method: 'DELETE'
		}).done(function(){
			resolve();
		});
	});
}


// // GET - Requests/read data from a specified resource
// // PUT - Update data to a specified resource. Takes two parameters.
// // PATCH - Updates only the changes

module.exports = {
  getFamily,
  addFamilyMember,
  postFamToFB,
  deleteFamilyMember
};