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