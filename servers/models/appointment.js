const mongoose = require("mongoose");

var AppointmentSchema = new mongoose.Schema({
  appointment_id: {
    type: Number,
    unique: true,
  },
  patient_name:{
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  patient_email:{
    type: String,
    // match: [/\S+@\S+\.\S+/, "is invalid"],
    required: true,
    unique: true,
  },
  patient_phone:{
    type: String,
   
    required: true,
    unique: true,
  },
  appointment_date: {
    type: Date,
    required: true,
  },
  appointment_time: {
      type:Date,
      required:true,
  },
  doctor_id: {
      type:Number,
      required:true,
      unique: true,
  },
  appointment_status:{
    type: String,


  }

});


var Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = { Appointment };