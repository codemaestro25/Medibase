import mongoose from 'mongoose';

// Define a schema
const VaccineRecordsSchema = new mongoose.Schema({
    patientId: {
        type: String,
        required: true
    },
    VaccineType: {
        type: String,
        required: true
    },
    HospitalID: {
        type: String,
        required: true
    },
    DateAdministered: {
        type: Date,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
});

// Create a model
const VaccineRecord = mongoose.model("VaccineRecord", VaccineRecordsSchema);

export default VaccineRecord;
