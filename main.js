console.log("Lakshman Ayodhya");

require("dotenv").config();

const express = require("express");
const pool = require("./config/dbConnection");

const app = express();
const port = process.env.port;
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Hello from insurance_project API!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const appointmentEntities =
  context.AI_Assisted_Dialogs.AgentNodeOpenAI.entities;

//context.exitReasons = {}
//context.stringifyObj = JSON.stringify()
const doctorTypeEntity = JSON.stringify(
  appointmentEntities.find((entity) => entity.doctorType)
);
context.doctorTypeEntity = doctorTypeEntity.doctorType;
koreDebugger.log("DoctorType:::" + context.doctorTypeEntity);
context.contactNumberEntity = appointmentEntities.find(
  (entity) => entity.contactNumber
);
context.patientNameEntity = appointmentEntities.find(
  (entity) => entity.patientName
);
context.preferredDateAndTimeEntity = appointmentEntities.find(
  (entity) => entity.preferredDateAndTime
);
context.reasonForVisitEntity = appointmentEntities.find(
  (entity) => entity.reasonForVisit
);

context.body = {
  patientName: context.genaiEntities.patientName,
  contactNumber: context.contactNumberEntity,
  doctorType: context.doctorTypeEntity,
  preferredDateAndTime: context.preferredDateAndTimeEntity,
  reasonForVisit: context.reasonForVisitEntity,
};


