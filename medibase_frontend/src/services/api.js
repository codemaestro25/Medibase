import axios from "axios";

const URL = "http://localhost:6001";


export const processFingeprintImage = async(image) =>{
    try {
        let response = await axios.post(`${URL}/process-fingerprint-image`, image);
        console.log("api");
        return response.data;
    } catch (error) {
        
    }
}

export const processIrisImage = async(image) =>{
    try {
        let response = await axios.post(`${URL}/process-iris-image`, image);
        console.log("api");
        return response.data;
    } catch (error) {
        
    }
}

export const fetchFingeprintDetails = async(matchedImageName) => {
    try {
        console.log(matchedImageName);
        let details = await axios.post(`${URL}/fetchFingeprintDetails`,{ matchedImageName});
        console.log(details);
        return details.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchIrisDetails = async(matchedImageName) => {
    try {
        console.log(matchedImageName);
        let details = await axios.post(`${URL}/fetchIrisDetails`,   {matchedImageName});
        console.log(details); 
        return details.data;
    } catch (error) {
        console.log(error.message);
    }
}

// medical records

export const fetchIndiClinicalRecords = async(uniqueId) =>{
    try {
        let records = await axios.post(`${URL}/fetchIndiClinicalRecords`, {uniqueId});
        return records.data;
    } catch (error) {
        
    }
} 
export const fetchIndiHospitalRecords = async(uniqueId) =>{
    try {
        let records = await axios.post(`${URL}/fetchIndiHospitalRecords`, {uniqueId});
        return records.data;
    } catch (error) {
        
    }
} 
export const fetchIndiTestsRecords = async(uniqueId) =>{
    try {
        let records = await axios.post(`${URL}/fetchIndiTestsRecords`, {uniqueId});
        return records.data;
    } catch (error) {
        
    }
} 
export const fetchIndiVaccineRecords = async(uniqueId) =>{
    try {
        let records = await axios.post(`${URL}/fetchIndiVaccineRecords`, {uniqueId});
        return records.data;
    } catch (error) {
        
    }
} 

export const fetchIndiPersonalDetails = async(uniqueId) =>{
    try {
        let records = await axios.post(`${URL}/fetchDetails`, {uniqueId});
        return records.data;
    } catch (error) {
        
    }
} 

export const orgLogin = async(orgDetails) =>{
    try {
        let response = await axios.post(`${URL}/orgLogin`, {orgDetails});
        return response.data;
    } catch (error) {
        
    }
}

export const addHospitalNewRecord = async(newData) => {
    try {
        let response = await axios.post(`${URL}/hospital/newRecord`, {newData});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

