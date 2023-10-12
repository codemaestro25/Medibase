import express from "express";
import multer from "multer";
import { spawn } from "child_process";
import temp from "temp";
import fs from "fs";
import cors from 'cors'
import Connection from "./db.js";
import mongoose from "mongoose";
import Person from "./models/Person.js";




const app = express();
app.use(cors());
const port = 6001;
Connection();

const storage = multer.memoryStorage(); // Store the uploaded image in memory
const upload = multer({ storage: storage });

app.use(express.json());

// api for processing the image 
app.post("/process-image", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file uploaded." });
    }


    const imageBuffer = req.file.buffer;

    // Create a temporary file to store the image buffer
    temp.track(); // Initialize the temp library
    const tempFilePath = temp.path({ suffix: ".jpg" });
    fs.writeFileSync(tempFilePath, imageBuffer);

    console.log(tempFilePath);
    // Execute the Python script as a child process with the temporary file path
    const pythonProcess = spawn('python', ['algo.py', tempFilePath]);

    // Pipe the image buffer to the Python process's stdin
    pythonProcess.stdin.write(imageBuffer);
    pythonProcess.stdin.end();

   // Handle the response data from your Python script as needed
const response = await new Promise((resolve) => {
  let jsonData = '';

  pythonProcess.stdout.on('data', (data) => {
    jsonData += data.toString();

    // Split the data by newlines
    const lines = jsonData.split('\n');

    // Process each line separately
    lines.forEach((line) => {
      if (line.trim() !== '') {
        try {
          const parsedData = JSON.parse(line);
          resolve(parsedData); // Resolve with the parsed JSON
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    });

    // Keep any remaining data for the next iteration
    jsonData = lines.pop() || '';
  });
});

    // console.log(response);
    // Here, you can send the response back to the client or perform other actions.

    // Delete the temporary file after processing
    temp.cleanupSync();
    
    res.json(response);
  } catch (error) {
    console.error("Error processing fingerprint:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/fetchDetails", async (req, res)=>{
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
})

app.post("/addDetails", async(req, res)=>{
  try {
    const newPerson = new Person(
       
    );
      newPerson.save();
      return res.status(200).json({msg: 'New Person added succesfully!'});
  } catch (error) {
    return res.status(500).json({msg: "Some error occured" , log: error.message});
  }
})

app.listen(port, () => {
  console.log(`Backend server running on Port: ${port}`);
});
