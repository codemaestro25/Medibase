import React, { useContext, useState, useRef, useEffect } from 'react';
import { checkUserCredForOtp } from '../../../../services/api';
import { useNavigate } from 'react-router-dom';
import { RecordsContext } from '../../../context/RecordsProvider';
import { fetchIndiVaccineRecords, fetchIndiClinicalRecords, fetchIndiTestsRecords, fetchIndiHospitalRecords, fetchIndiPersonalDetails } from '../../../../services/api'
import '../HospitalLogin/HospitalLogin.css'


const UserLogin = () => {
    const [otpVisible, setOtpVisible] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const otpButtonRef = useRef(null);

    useEffect(() => {
        if (otpVisible) {
            // Trigger click event on the OTP button
            otpButtonRef.current.click();
        }
    }, [otpVisible]);

const navigate = useNavigate();

const {setVaccineRecs,  setTestRecs,setHospitalRecs,setClinicRecs, setPersonal} =  useContext(RecordsContext);


    const handleGetOtp = async (event) => {
        event.preventDefault();
        const creds = {
            uniqueId: document.getElementById('uniqueId').value,
            password: document.getElementById('password').value
        };
        console.log(creds.password);
        const response = await checkUserCredForOtp(creds);
        if (response?.flag) {
            setOtpVisible(true);
            // Hide the success alert after 5 seconds
        } else {
            setErrorAlert(true);
            setTimeout(() => {
                setErrorAlert(false);
            }, 5000); // Hide the error alert after 5 seconds
        }
    };
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const txtInp = document.getElementById('uniqueId').value;
        let vaccines = await fetchIndiVaccineRecords(txtInp);
        let hospital = await fetchIndiHospitalRecords(txtInp);
        let tests = await fetchIndiTestsRecords(txtInp);
        let clinical = await fetchIndiClinicalRecords(txtInp);
        let details = await fetchIndiPersonalDetails(txtInp);
    
        setVaccineRecs(vaccines);
        setClinicRecs(clinical)
        setHospitalRecs(hospital)
        setTestRecs(tests);
        setPersonal(details)
        navigate('/overview')
    }

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
    
        const handleSignUpClick = () => {
          container.classList.add("right-panel-active");
        };
    
        const handleSignInClick = () => {
          container.classList.remove("right-panel-active");
        };
    
        signUpButton.addEventListener('click', handleSignUpClick);
        signInButton.addEventListener('click', handleSignInClick);
    
        return () => {
          signUpButton.removeEventListener('click', handleSignUpClick);
          signInButton.removeEventListener('click', handleSignInClick);
        };
      }, []);
    

    return (
        <div className='d-flex flex-column align-items-center container my-5' >
             {errorAlert && (
                <div className="alert alert-danger" role="alert">
                    Invalid credentials! Please try again.
                </div>
            )}
            <div class="loginContainer" id="container">
            <div class="form-container sign-up-container">
            <form  className='loginForm' onSubmit={handleSubmit}>
                    
                    
                    <span></span>
                    <input className= "loginInput" type="text" placeholder="One Time Password" id='otp' />
                    
                    
                    <button type='submit'>Sign In</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form  className='loginForm' onSubmit={handleGetOtp}>
                    <h1>User Login</h1>
                    
                    <span></span>
                    <input className= "loginInput" type="text" placeholder="ID" id='uniqueId' />
                    <input className= "loginInput" type="password" placeholder="Password"  id = 'password' />
                    
                    <button type='submit'>Get Otp</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>OTP</h1>
                        <p>Enter the OTP received on registered Medibase moible number</p>
                        <button class="ghost" id="signIn" >Back</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                    <h1>Login</h1>
                        <img   style={{borderRadius: "8px"}} alt="" srcset="" />
                        <p>Enter your uniqueId and password</p>
                        <button class="ghost" id="signUp"   ref={otpButtonRef} hidden>Clinic</button>
                    </div>
                </div>
            </div>
        </div>
        
        
         </div>
          )

    
};

export default UserLogin;

// return (
//     <div className='wrapContainer my-5'>
//         <form>
//             {successAlert && (
//                 <div className="alert alert-success" role="alert">
//                     OTP sent successfully!
//                 </div>
//             )}
//             {errorAlert && (
//                 <div className="alert alert-danger" role="alert">
//                     Invalid credentials! Please try again.
//                 </div>
//             )}
//             <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Unique Id</label>
//                 <input type="text" className="form-control" id="uniqueId" aria-describedby="emailHelp" />
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="password" />
//             </div>
//             {otpVisible ? (
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">One Time Password</label>
//                     <input type="text" className="form-control" id="otp" aria-describedby="emailHelp" />
//                 </div>
//             ) : null}
//             {!otpVisible ? (
//                 <button type="submit" className="btn btn-primary" onClick={handleGetOtp}>GetOtp</button>
//             ) : (
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             )}
//         </form>
//     </div>
// );
