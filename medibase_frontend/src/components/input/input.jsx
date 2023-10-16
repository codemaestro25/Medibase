import React, { useState , useRef, useEffect } from "react";
import { Button, Typography, Box, styled, Divider } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { fetchDetails, processImage } from "../../services/api";
import FoundDialogue from "../details/foundDialogue";
import video1 from './video/finperprint_scan.mp4'


// const dialogStyle = {
//   width: "60%",
//   height: "90%",
//   maxWidth: "90%",
//   maxHeight: "90%",
//   overflow: "hidden",
//   backgroundColor: "#323436",
//   color: "#41cf3c",
//   fontFamily: "Consolas, monospace",
// };

const GreenButton = styled(Button)`


    color : #41cf3c;
  background-color: #000;
  :hover {
    background-color: #41cf3c;
    color: #000;
  }
`;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Container = styled(Box)`
margin : auto;
margin-top : 80px;
  display: flex !important;
 width : 80%;
  overflow : hidden;
  justify-content : space-evenly;
`;

const UploadSection = styled(Box)`
  padding: 20px !important;
  margin-top: 26px !important;
  & > *{
    margin: 30px 0px !important;
  }
  height: 550px;


  `;


  const DividerContainer = styled(Box)`
  display: flex;
  
 
`;


const InputDialog = () => {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [matchDetails , setMatchDetails] = useState(null);
  const [open , setOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedFile(file);
    setFileName(file.name);
  };

  const handleProcessImage = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);
      
      try {
        // Call the processImage function from your Axios file
        let response = await processImage(formData);
        console.log(JSON.stringify(response.filename));
      
        // image name fetched in response , passong it to fetchDetails api

        let details = await fetchDetails(response.filename);

        // Handle the response from the server as needed
        console.log(response);
        console.log(details);
        setOpen(true);
        setMatchDetails(details);
        setIsVideoPlaying(false);
      } catch (error) {
        console.error("Image processing failed.");
      }
    }
  };

  const videoRef = useRef(null);

  useEffect(() => {
    // Programmatically trigger video playback
    if (isVideoPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying])

  return (
   <>
   

      <Container>
         <UploadSection>
           <Typography style={{ fontSize: "60px", fontFamily: "monospace" }}>
           Fingerprint Identification
          </Typography>

         <GreenButton
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}

          >
            Upload Image
            <VisuallyHiddenInput type="file" onChange={handleUpload} />
          </GreenButton>
          {fileName && (
            <>
              <Typography style={{ fontSize: "22px", padding:"0 15px", fontFamily: "monospace" }}>{`Image : ${fileName}`}</Typography>
              <GreenButton
                component="label"
                variant="contained"
                startIcon={<FingerprintIcon />}
                onClick={handleProcessImage}
              >
                Identify
              </GreenButton>
            </>
          )}
   
        </UploadSection>
      <DividerContainer>
      <Divider
          orientation="vertical"
          style={{
            backgroundColor: "#41cf3c",
            margin: "40px 50px",
            width: 1.5,
            height: "100%",
            
          }}
        />
      </DividerContainer>
      <video ref={videoRef} src={video1} width="400" height="300" loop={true} controls = {true} autoPlay={isVideoPlaying} />
      </Container>
      {matchDetails &&  <FoundDialogue details = {matchDetails} open = {open} setOpen={setOpen}/>}
      </>

    
     
    
  );
};

export default InputDialog;
