var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Doctor_appointment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
}).then(()=>{
    console.log('connection sucessful');
}).catch((e)=>{
    console.log('no connetion');
})

module.exports = { mongoose };