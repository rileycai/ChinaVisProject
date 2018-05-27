var axios = require('axios');
var express = require('express');
var qs = require('qs');
var router = express.Router();

const ajax = axios.create({
  baseURL: 'http://123.206.64.248:5000',
});

function getMethod(req,res,next){
  // var originalUrl=req.originalUrl.replace("/AdminApi","");
  // console.log(originalUrl);
  // // console.log("hahaha");
  // console.log(req.body);

  ajax({
    method: req.method.toLowerCase(),
    url: req.originalUrl,
    data: req.body,
    dataType:'jsonp',
    }).then(response => {
    //  console.log("success");
      res.send(response.data);
    }).catch(err => {
      console.log("error");
      console.log(err);
    });

};
function postMethod(req,res,next){
  // var originalUrl=req.originalUrl.replace("/AdminApi","");
  // console.log(originalUrl);
  // // console.log("hahaha");
  // console.log(req.body);

  ajax({
    method: req.method.toLowerCase(),
    url: req.originalUrl,
    data: req.body,
    dataType:'jsonp',
    }).then(response => {
      res.send(response.data);
    }).catch(err => {
      console.log("error");
      console.log(err);
    });

};

/* GET home page. */
router.get('',function(req,res,next){
   getMethod(req,res,next);
});

router.post('/', function(req, res, next) {
  postMethod(req,res,next);
});


module.exports = router;
