const mongoose = require('mongoose');


module.exports = mongoose.connect('mongodb://127.0.0.1:27017/rest').then(()=>{
  console.log("DB connected")
}).catch((err)=>{
    console.log(err.message)

});
// module.exports = mongoose.connect('localhost').then;