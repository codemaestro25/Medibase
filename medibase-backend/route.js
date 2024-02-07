import express from 'express';
const Route = express.Router();
import multer from "multer";
import { processFingerprint } from './controllers/processFingerprint.js';
import { fetchDetails, fetchIndiClinicalRecords, fetchIndiHospitalRecords, fetchIndiTestsRecords, fetchIndiVaccineRecords } from './controllers/PersonDetails.js';


const storage = multer.memoryStorage(); // Store the uploaded image in memory
const upload = multer({ storage: storage });


Route.post("/process-image",upload.single("image"),processFingerprint);
Route.post("/fetchDetails", fetchDetails);
Route.post("/fetchIndiVaccineRecords", fetchIndiVaccineRecords);
Route.post("/fetchIndiHospitalRecords", fetchIndiHospitalRecords)
Route.post("/fetchIndiTestsRecords", fetchIndiTestsRecords)
Route.post("/fetchIndiClinicalRecords", fetchIndiClinicalRecords)


export default Route;