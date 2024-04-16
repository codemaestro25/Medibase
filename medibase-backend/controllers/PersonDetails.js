
import ClinicalRecord from "../models/ClinicalRecords.js";
import HospitalAdmitRecord from "../models/HospitalAdmitRecords.js";
import Person from "../models/Person.js";
import TestRecord from "../models/TestsRecord.js";
import VaccineRecord from "../models/VaccineRecords.js";
import objectHash from "object-hash"

// requests for fetching the data from database


export const fetchDetails = async(req ,res)=>{
    try {
        // checking the Person;
      
        console.log(req.body);

        const uidhash= objectHash.MD5(req.body.uniqueId);
        
        
        // const details = await Person.findOne({uniqueId:  req.body.uniqueId});
        const details = await Person.findOne({uniqueId: uidhash});
        
        if(details){
        return res.status(200).send(details)
        }
        else{
          return res.status(204).json({msg: "No Match Found"});
        }
    } catch (error) {
        return res.status(500).json({msg: "Some error occured" , log: error.message});
        
    }
}


// getting all the individual records
export const fetchIndiVaccineRecords = async(req, res) => {
    try {
        console.log(req.body.uniqueId)
        // console.log("sj")
        // console.log(uidhash)
        const uidhash= objectHash.MD5(req.body.uniqueId);
        const details = await VaccineRecord.find({ patientId: uidhash });
        // console.log("skkk")
        // console.log(details)
        if(details){
            return res.status(200).json(details);
        }
        else{
            return res.status(204).send(`NO data found for given id: ${req.body.uniqueId}`)
        }
    } catch (error) {
        console.error('Error fetching vaccine records:', error);
        return res.status(500).json({ error: error.message });
    }
  };
export const fetchIndiHospitalRecords = async(req, res) => {
    try {

        const uidhash= objectHash.MD5(req.body.uniqueId);
      
        const details = await HospitalAdmitRecord.find({ patientId: uidhash });
        if(details){
            return res.status(200).json(details);
        }
        else{
            return res.status(204).send(`NO data found for given id: ${req.body.uniqueId}`)
        }
    } catch (error) {
        console.error('Error fetching Hospital records:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
  };


  export const fetchIndiTestsRecords = async(req, res) => {
    try {

        const uidhash= objectHash.MD5(req.body.uniqueId);
      
        const details = await TestRecord.find({ patientId: uidhash });
        if(details){
            return res.status(200).json(details);
        }
        else{
            return res.status(204).send(`NO data found for given id: ${req.body.uniqueId}`)
        }
    } catch (error) {
        console.error('Error fetching Tests done records:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const fetchIndiClinicalRecords = async(req, res) => {
    try {
        const uidhash= objectHash.MD5(req.body.uniqueId);
      
        const details = await ClinicalRecord.find({ patientId: uidhash });
        if(details){
            return res.status(200).json(details);
        }
        else{
            return res.status(204).send(`NO data found for given id: ${req.body.uniqueId}`)
        }
    } catch (error) {
        console.error('Error fetching Clinical records:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
  };

export const getLatestSugarBPCholestrol = async(req, res)=>{
    
    console.log("frend", req.body);

    try {
        // Find the document with the latest AnalysisDate for the given patientId
        const latestRecord = await TestRecord.findOne( {patientId: req.body.patientId} ).sort({ AnalysisDate: -1 });

        if (!latestRecord) {
            return res.status(404).json({ message: "No records found" });
        }

       
        const { BloodPressure, SugarLevels, CholesterolLevels } = latestRecord;

        res.status(200).json({ BloodPressure, SugarLevels, CholesterolLevels });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}





// try {
//     // checking the user;

//     const details = await Person.findOne({fingerprint: {$elemMatch : req.body.matchedImageName}});

//     if(details){
// return response.status(200).json(details)
//     }
//     else{
//         return response.status(204).send({msg: "No Match Found"});
//     }
// } catch (error) {
    
    
// }