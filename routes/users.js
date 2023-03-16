var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile("mails.txt", function (err, data){
    if (err){
      console.log(err);
    }
    const users= JSON.parse(data)
    res.send(users)
    return;  
  })
});


// ska göras i en post egentligen, skriv om till en post. 
router.post('/add', function(req, res, next) {
  fs.readFile("mails.txt", function (err, data){
    if (err){
      console.log(err);
    }
    const users= JSON.parse(data) //hämtar filen här

    let newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser); //vi har skapat ett nytt objekt och pushar upp den till vår JSON array.
      //stringify menas med att skriva över den gamla
    fs.writeFile("mails.txt", JSON.stringify(users), function(err){
      if (err){
        console.log(err);
      }
    } )  //sparar nya objektet till vår JSOn fil

    res.send(users)
    return;  
  })
});

module.exports = router;
