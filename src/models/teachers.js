const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validator = require("validator");

const teachSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  age: {
    type: Number,
    min: 21,
    max: 23,
  },
  phone: {
    type: Number,
    required: true,
    mimlength: 11,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Teacher = new mongoose.model("Teacher", teachSchema);

// const Teacher = new mongoose.model("Teacher", {
//     name :{
//         type : String,
//         required : true,
//         minlength : 3
//     },

//     email :{
//         type : String,
//         required : true,
//         unique : [true, "Email id already present"],
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Invalid email')
//             }

//         },
//     age :{
//         type : Number,
//         required: true,
//         min : 21,
//         max : 23
//     },
//     phone :{
//           type : Number,
//           require : true,
//           mimlength : 11,
//           unique : true
//           }

//     },
//     address : {
//         type : String,
//         required : true
//     }

// })

module.exports = Teacher;
