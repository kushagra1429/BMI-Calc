//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const BMI=express();
BMI.use(bodyParser.urlencoded({extended: true}));
BMI.get("/", function(req,res){
    res.sendFile(__dirname+"/BMI.html");
})
BMI.post("/BMI.html", function(req,res){
    var Weight=Number(req.body.Weight);
    var Height= Number(req.body.Height);
    var b=Height**2;
    var BMI= (Weight/b);
    res.send("Your BMI is: "+BMI);
    console.log(req.body);
})
BMI.listen(1000, function(){
    console.log("Done");
})
