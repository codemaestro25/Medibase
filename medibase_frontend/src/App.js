
import './App.css';
import React from 'react'; 
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import InputDialog from './components/input/input';
import CssBaseline from '@mui/material/CssBaseline'; 

const theme = createTheme({
  palette: {
    background: {
      default: "#000", 
    },
    text: {
      primary: "#41cf3c",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InputDialog />
    </ThemeProvider>
  );
}

export default App;
