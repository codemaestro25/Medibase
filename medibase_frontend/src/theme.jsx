import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    body: {
      backgroundColor: "#000", // Use 'default' key for background color
    },
    typography: {
      color: "#41cf3c", // Use 'primary' key for text color
    },
  },
});

export default theme;
