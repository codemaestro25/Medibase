import axios from "axios";

const URL = "http://localhost:6001";


export const processImage = async(image) =>{
    try {
        let response = await axios.post(`${URL}/process-image`, image);
        console.log("api");
        return response.data;
    } catch (error) {
        
    }
}

export const fetchDetails = async(matchedImageName) => {
    try {
        console.log(matchedImageName);
        let details = await axios.post(`${URL}/fetchDetails`,{ matchedImageName});
        console.log(details);
        return details.data;
    } catch (error) {
        console.log(error.message);
    }
}