'use strict';
const fs = require('fs');
var file = process.argv[2];

fs.readFile(file, (err, data) => {
  if(err){
    console.log(err);
  } else {
    let text = data.toString().split('\n');
    console.log(text.length - 1);
  }
})

//es5 version 
/*
 var fs = require('fs')
  var file = process.argv[2]

  fs.readFile(file, function (err, contents) {
    // fs.readFile(file, 'utf8', callback) can also be used
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)
  })
*/