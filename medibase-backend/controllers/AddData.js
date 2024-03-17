import HospitalAdmitRecord from "../models/HospitalAdmitRecords.js";

export const addHospitalNewRecord = async(req,res)=>{
   
    const {uniqueId,caseId ,admittedFor, dateAdmitted, dateDischarged, billingAmount,  hospitalId} = req.body.newData;
   
   
try {
    const hospitalRecord = new HospitalAdmitRecord({
        patientId: uniqueId, CaseID: caseId, AdmissionDate: dateAdmitted, DischargeDate: dateDischarged, BillingDetails: billingAmount, AdmittedFor: admittedFor, HospitalID: hospitalId
    });

    const addedRecord = await hospitalRecord.save();
   
    if(addedRecord){
    
        return res.status(200).json({flag: true, message: "added new record"});
    }
    else{
        return res.status(500).send("Something went wrrong")
    }
} catch (error) {
    console.log(error);
    return res.status(500).send(error)
}
}