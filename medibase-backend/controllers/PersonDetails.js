
import Person from "../models/Person.js";

// requests for fetching the data from database


export const fetchDetails = async(req ,res)=>{
    try {
        // checking the Person;
        console.log("he");
        console.log(req.body);
        console.log("she");
        const details = await Person.findOne({fingerprint:  req.body.matchedImageName});
    
    
        // console.log(details.name);
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