const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/teachers-api" , {
   
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log('Connection is done')
}).catch((e) =>{
    console.log(e)
})


