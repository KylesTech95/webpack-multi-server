const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 6655;
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('dist')));

// express native api's - These api's will not work in webpack because 'configure' is not included in proxy's context
app.get('/test',function(req,res){
    res.json({message:'Hello World'})
})
app.get('/cfg/configure/4',function(req,res){
    res.json('configure api is positive')
})
app.get('/cfg/configure/3',function(req,res){
    res.json('configure api is positive')
})

// webpack context is seeking routes below
app.get('/api/test',function(req,res){
    res.json({message:'Hello World'})
})
app.get('/cfg/configuration/4',function(req,res){
    res.json('configure api is positive')
})
app.get('/cfg/configuration/5',function(req,res){
    res.json('configure api is positive')
})
app.get('/cfg/configuration/6',function(req,res){
    res.json('configure api is positive')
})
app.get('/cfg/configurational/7',function(req,res){
    res.json('configure api is positive')
})


// routes (6655)
// listen on express app server
app.listen(PORT, () => {
  console.log("you are listening on express server: " + PORT);
});
