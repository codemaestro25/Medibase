
import './App.css';
import React from 'react'; 
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import InputDialog from './components/input/input';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom"; 

import IdInput from './components/portal/idInput';



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
     <Router>
     {/* <CssBaseline /> */}
      <Routes>
        <Route exact path='/idinput' element={<IdInput/>}>
        </Route>
        <Route exact path='/biometricId' element={<InputDialog />}>
        </Route>
      </Routes>
     </Router>
    </ThemeProvider>
  );
}

export default App;
