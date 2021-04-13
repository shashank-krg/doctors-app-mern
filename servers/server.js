const express = require("express");
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { User } = require("./models/user");
var { Doctor } = require("./models/doctor");
var { Appointment } = require("./models/appointment");
var {
  Initialization,

  InitializeUser,
  InitializeDoctor,
  InitializeAppointment,
} = require("./initialization");

var app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    user.find({}, (err, data) => {

        data.forEach(function(a) {
            if (a.email === req.body.email && a.password === req.body.password) {
                console.log("Login sucessful");
                res.send(a);
            } else {
                res.send("User not found");
            }
        })
    })
})

app.post("/doctor", (req, res) => {
  var DoctorList = [{ 
    doctor_id: req.body.doctor_id,
    doctor_name:  req.body.doctor_name,
    user_id:  req.body.user_id,
    appointment_slot_time:  req.body.appointment_slot_time,
    start_time:  req.body.start_time,
    end_time:  req.body.end_time
       }];
  InitializeDocor(DoctorList);
});

app.post("/appointment", (req, resp) => {
  var AppointmentList = [
    {
        patient_name: req.body.patient_name,
        patient_email: req.body.patient_email,
        patient_phone: req.body.patient_phone,
        appointment_date:req.body.appointment_date,
        appointment_time:req.body.appointment_time,
        doctor_id:req.body.doctor_id,
        appointment_status: req.body.appointment_status
    },
  ];
  var appointment = new Appointment({
    patient_name: AppointmentList[0].patient_name,
    patient_email: AppointmentList[0].patient_email,
    patient_phone: AppointmentList[0].patient_phone,
    appointment_date:AppointmentList[0].appointment_date,
    appointment_time:AppointmentList[0].appointment_time,
    doctor_id:ObjectId(AppointmentList[0].doctor_id),
    appointment_status: AppointmentList[0].appointment_status,
  });
  appointment
    .save()
    .then((res) => {
      console.log("Appointment Placed Successfully", res);
      resp.send(res);
    })
    .catch((e) => {
      console.log("Unable to place order as", e._message, e);
      resp.send(e);
    });
  // console.log(req.body);
});

app.get("/doctor", (req, res) => {
    Doctor.find().then(
      (doctor) => {
        res.send({ doctor });
      },
      (e) => {
        res.status(400).send(e);
      }
    );
  });

app.get("/appointment", (req, res) => {
  Appointment.find().then(
    (appointment) => {
      res.send({ appointment });
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});



app.listen(3000, () => {
  console.log("Started on port 3000");
  Initialization();
});