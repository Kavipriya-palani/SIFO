import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const profileDetails = useSelector((state) => state.loginDetails);
    const handleSendPassword = () => {
        console.log('Password reset request sent to:', email);
    };

    const forgetSchema = yup.object({
        email: yup.string().email('Enter a registered Email Address').required('Email is required'),
      });

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(forgetSchema)
      });

      const onSubmit = (data) => {
        console.log('Login details:', data);
      };
      console.log("profileDetails",profileDetails)
    return (
        <div className="login-container">
        <div className="login-box">
          <h2 className="text-center text-primary">Forgot Password</h2>
          <h6>Enter your registered email to reset password</h6>
          <form
            id="formForget"
            onSubmit={handleSubmit(onSubmit)}
            className="p-3"
          >
                <div className="mb-3">
              <label htmlFor="email" className="form-label font-weight">
                Email <span className="required"> *</span>
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && <div className="text-danger mt-1">{errors.email.message}</div>}
            </div>
            <button type="submit" form="formForget" className="btn btn-success w-100 mt-3 p-2">
              Submit
            </button>
          </form>
          <div className="forgot-password">
          <Link to="/">Back to Login?</Link>
        </div>
        </div>
      </div>
    );
};

export default ForgotPassword;
