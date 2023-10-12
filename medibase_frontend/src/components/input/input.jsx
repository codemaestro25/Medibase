import React, { useState } from "react";
import { Button, Dialog, Typography, Box, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { processImage } from "../../services/api";


const dialogStyle = {
  width: "60%",
  height: "90%",
  maxWidth: "90%",
  maxHeight: "90%",
  overflow: "hidden",
  backgroundColor: "#323436",
  color: "#41cf3c",
  fontFamily: "Consolas, monospace",
};

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
  display: flex;
`;

const UploadSection = styled(Box)`
  padding: 20px !important;
  margin-top: 26px !important;
  & > * {
    margin: 30px 0px !important;
  }
`;

const InputDialog = () => {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
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
        

        // Handle the response from the server as needed
        console.log(response);
      } catch (error) {
        console.error("Image processing failed.");
      }
    }
  };

  return (
   
      <Container>
        <UploadSection>
          <Typography style={{ fontSize: "30px" }}>
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
              <Typography>{`Image : ${fileName}`}</Typography>
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
      </Container>
    
  );
};

export default InputDialog;
