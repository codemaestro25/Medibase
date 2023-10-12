import { response } from "express";
import Person from "../models/Person.js";

// requests for fetching the data from database


export const fetchDetails = async(req ,res)=>{
    try {
        // checking the user;

        const details = await Person.findOne({fingerprint: {$elemMatch : req.body.matchedImageName}});

        if(details){
return response.status(200).json(details)
        }
        else{
            return response.status(204).send({msg: "No Match Found"});
        }
    } catch (error) {
        
        
    }
}
    
