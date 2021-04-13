const mongoose = require("mongoose");

var DoctorSchema = new mongoose.Schema({
  doctor_id: {
    type: Number,
    unique: true,
  },
  doctor_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  user_id: {
      type:Number,
      unique:true,
      required:true,
  },
  appointment_slot_time: {
      type:Date,
      required:true,
  },
  start_time:{
    type:Date,
    required:true,
  },
  end_time:{
    type:Date,
    required:true,
  }
});


var Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = { Doctor };