import "./userregistration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserRegistration() {
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:''
  })
  const [otp,setOtp]=useState('');
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [reVerify, setReVerify] = useState(false);
  const navigate = useNavigate();
  const registerUser = () => {
    if(userData.name.length===0){
      alert('Kindly enter name');
      document.getElementById('inpName').focus();
      return;
    }
    if(userData.email.length===0){
      alert('Kindly enter email');
      document.getElementById('inpEmail').focus();
      return;
    }
    if(userData.password.length===0){
      alert('Kindly enter password');
      document.getElementById('inpPass').focus();
      return;
    }
    const emailPattern=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if(!emailPattern.test(userData.email)){
      alert('Kindly enter correct email');
      document.getElementById('inpEmail').focus();
      return;
    }
    if(userData.password.length<6 || userData.password.length>15){
      alert('Password length should be between 6 to 16');
      document.getElementById('inpPass').focus();
      return;
    }
    setTimeout(()=>setVerifyEmail(true),400);
  };
  const verifyOtp = () => {
    if(otp==='123456')
    navigate('/setup');
    else
    alert('Incorrect OTP! Try OTP=123456 (dummy for testing)');
  };

  const resendOtp=()=>{
    setReVerify(false);
    alert('Try OTP=123456 (dummy for testing)')
    setTimeout(()=>setReVerify(true),700);
  }
  return (
    <div className="main-container">
      <div className="company-logo">
        <h1>BeyondChats</h1>
        <p>A ChatBot Company</p>
      </div>
      {!verifyEmail && <div className="user-registration-main">
        <h3>User Registration</h3>
        <div className="user-registration-form">
          <label htmlFor="name">Name:</label>
          <input 
            id="inpName"
            name="name" 
            type="text" 
            placeholder="Enter your Name" 
            onChange={(e)=>setUserData((prev)=>({...prev,name:e.target.value}))}
          />
          <label htmlFor="email">Email:</label>
          <input 
            id="inpEmail"
            name="email" 
            type="email" 
            placeholder="Enter your Email" 
            onChange={(e)=>setUserData((prev)=>({...prev,email:e.target.value}))}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="inpPass"
            name="password"
            type="password"
            placeholder="Enter your Password"
            onChange={(e)=>setUserData((prev)=>({...prev,password:e.target.value}))}
          />
        </div>
        <div className="btn-container">
          <button className="cont-google-btn" onClick={()=>alert('Sorry for inconvenience! Issue from server side, Kindly try manual registering')}>Continue with Google</button>
          <button className="register-btn" onClick={registerUser}>Register</button>  {/*can use disable property to prevent click disabled={userData.name.length===0 || userData.email.length===0 || userData.password.length===0}*/}
        </div>
        </div>}
      {verifyEmail && (
        <div className="email-verification-main">
          <h3>Email Verification</h3>
          <p>Kindly enter the otp sent to the email used for registration.</p>
          {reVerify && <p>OTP has been sent again to email.</p>}
          <input type="number" onChange={(e)=>setOtp(e.target.value)}/>
          <button className="verify-btn" onClick={verifyOtp}>Verify</button>
          <p>
            Didn't get the otp? <span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}} onClick={resendOtp}>Resend otp</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default UserRegistration;
