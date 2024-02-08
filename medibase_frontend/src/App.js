
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
import Overview from './components/portal/records/overview';
import Vaccines from './components/portal/records/Vaccines';
import RecordsProvider from './components/context/RecordsProvider';



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
    // <ThemeProvider theme={theme}>
    <RecordsProvider>
       <Router>
     {/* <CssBaseline /> */}
      <Routes>
        <Route exact path='/idinput' element={<IdInput/>}>
        </Route>
        <Route exact path='/biometricId' element={<InputDialog />}>
        </Route>
        <Route exact path='/overview' element={<Overview />}>
        </Route>
        <Route exact path='/vaccines' element={<Vaccines />}>
        </Route>
      </Routes>
     </Router>
    </RecordsProvider>
    // </ThemeProvider>
  );
}

export default App;
