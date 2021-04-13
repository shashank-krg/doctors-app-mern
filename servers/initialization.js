const { Collection } = require("mongoose");
var { User } = require("./models/user");
var { Doctor } = require("./models/doctor");
var { Appointment } = require("./models/appointment");


var UserList = [{user_id:1, name: "Dr. Saurav Agarwall" ,email:"saurav@gmail.com" , password:"saurav@123"},{user_id:2, name: "Dr. rahul Gupta" ,email:"rahul@gmail.com" , password:"rahul@123"}];
var DoctorList = [{doctor_id:1, doctor_name: "Dr. Saurav Agarwall" ,user_id:"1" , appointment_slot_time:"09:30", start_time:"08:30",end_time:"16:30"}, {doctor_id:2, name: "Dr. Rahul Gupta" ,user_id:2 , appointment_slot_time:"11:30", start_time:"09:30",end_time:"18:30"}];
var AppointmentList = [
  { patient_name: "Ram", patient_email: "ram@gmail.com", patient_phone: 9304219693,appointment_date:2021/04/13,appointment_time:"09:30",doctor_id:1,appointment_status:"open" },
  { patient_name: "lokesh", patient_email: "lokesh@gmail.com", patient_phone: 7682886059,appointment_date:2021/04/13,appointment_time:"08:30",doctor_id:2,appointment_status:"open" },
];

var InitializeUser = (UserList) => {
    UserList.forEach(async (user) => {
      var user = new User({
        user_id: `${user.user_id}`,
        name: `${user.name}`,
        email: `${user.email}`,
        password: `${user.password}`,
    
      });
      await user
        .save()
        .then((res) => {
          console.log(" User Data stored Successfully", res);
        })
        .catch((e) => {
          console.log("Unable to create new data as", e._message);
        });
    });
  };


var InitializeDoctor = (DoctorList) => {
  DoctorList.forEach(async (doct) => {
    var doct = new Doctor({
      doctor_id: `${doct.doctor_id}`,
      doctor_name: `${doct.doctor_name}`,
      user_id: `${doct.user_id}`,
      appointment_slot_time: `${doct.appointment_slot_time}`,
      start_time: `${doct.start_time}`,
      end_time: `${doct.start_time}`,
    });
    await doctor
      .save()
      .then((res) => {
        console.log("Data stored Successfully", res);
      })
      .catch((e) => {
        console.log("Unable to create new data as", e._message);
      });
  });
};

var InitializeAppointment = (AppointmentList) => {
  AppointmentList.forEach(async (app) => {
    var appointment = new Appointment({
      patient_name: app.patient_name,
      patient_email: app.patient_email,
      patient_phone: app.patient_phone,
      appointment_date:app.appointment_date,
      appointment_time:app.appointment_time,
      doctor_id:app.doctor_id,
      appointment_status: app.appointment_status
    });
    await doctor
      .save()
      .then((res) => {
        console.log(" Appointment Booked Successfully", res);
      })
      .catch((e) => {
        console.log("Sorry your data cant be processed", e._message);
      });
  });
};

var Initialization = () => {
  InitializeUser(UserList);
  InitializeDoctor(DoctorList);
  InitializeAppointment(AppointmentList);
};

module.exports = { Initialization, InitializeDoctor, InitializeAppointment , InitializeUser };