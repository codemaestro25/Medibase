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

export const fetchIndiMedicalRecords = async(uniqueId) =>{
    try {
        let records = await axios.post(`${URL}/fetchIndiMedicalRecords`, {uniqueId});
        return records.data;
    } catch (error) {
        
    }
} 