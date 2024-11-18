import React from "react";
import { useNavigate } from "react-router-dom";
const OtpVerification=()=>{
 const navigate=useNavigate();
    return(
        <div className="login-container">
        <div className="forgot-password-center">
            <h2>OTP Verification</h2>

            <form className="forgot-password-form">
 

                <div className="button-container">
                    <button type="button" className="back-login-btn" onClick={() => navigate("/")}>
                    	Verify Code 
                    </button>

                    <button
                        type="button"
                        className="send-password-btn"
                       // onClick={handleSendPassword}
                       // disabled={!email} 
                    >
                        Send New Password
                    </button>
                </div>
            </form>
        </div>
    </div>

    );
};
export default OtpVerification;