
import Person from "../models/Person.js";
import Connection from "../db.js";
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


// getting all the medical records
export const fetchIndiMedicalRecords = async (req, res) => {
    try {
       
        
        // Establish MongoDB connection
        await Connection();

        const db = mongoose.connection.db;

        // Define collections you want to query
        const collections = ['TestRecords', 'VaccineRecords', 'ClinicalRecords','HospitalAdmitRecord']; // Add more collections if needed

        let results = [];

        // Iterate through collections and perform query
        for (const collectionName of collections) {
            const collection = db.collection(collectionName);
            const query = { patientId: "P0001" }; 
            const documents = await collection.find(query).toArray();
            results = results.concat(documents);
        }

        // Send response to the frontend
        res.status(200).json(results);

        // Close the MongoDB connection
        await client.close();
        console.log('MongoDB connection closed');
    } catch (error) {
        console.error('Error fetching medical records:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
    
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