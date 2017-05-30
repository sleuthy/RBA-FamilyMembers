"use strict";

let $ = require("jquery");

function buildFamily() {
    let famObj = {
    name: $("#name").val(),
    age: parseInt($("#age").val()),
    gender: $("#gender").val(),
    skills: [
    $("#skills1").val(),
    $("#skills2").val(),
	$("#skills3").val(),
	$("#skills4").val()
    ]
  };
  return famObj;
}

module.exports = {buildFamily};