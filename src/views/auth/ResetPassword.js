import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {isEmpty} from 'lodash'


const ResetPassword = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        repeatPassword: false,
    });

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log("called");
    };
    const resetSchema = yup.object({
        oldPassword: yup.string().required('Password is required'),
        newPassword: yup.string().required('Password is required'),
        confirmPassword: yup.string().required('Password is required')
      });
      const navigate = useNavigate();
    
      const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        watch,
      } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(resetSchema)
      });
    
      const onSubmit = () => {
        console.log('Login details:', getValues('oldPassword'),getValues('newPassword'),getValues('confirmPassword'));
      };

    const togglePasswordVisibility = (field) => {
        console.log("field",field)
          if (field === "oldPassword") {
              if (!isEmpty(getValues('oldPassword'))) {
                  setShowPassword({ ...showPassword, oldPassword: !showPassword.oldPassword });
              }
          } else if (field === "newPassword") {
              if (!isEmpty(getValues('newPassword'))) {
                  setShowPassword({ ...showPassword, newPassword: !showPassword.newPassword });
              }
          } else if (field === "repeatPassword") {
              if (!isEmpty(getValues('confirmPassword'))) {
                  setShowPassword({ ...showPassword, repeatPassword: !showPassword.repeatPassword });
              }
          }
      };
  
    return (
        <>
        <div className="login-container">
            <div className="login-box">
                <h2 className="text-center text-primary">Reset Password</h2>
                <form
                    id="formReset"
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-3"
                    >
                          <div className="mb-2">
                      <label htmlFor="oldPassword" className="form-label font-weight">
                        Old Password <span className="required"> *</span>
                      </label>
                      <div className="input-group">
                        <input
                           type={showPassword.oldPassword ? "text" : "password"}
                          className="form-control"
                            name="oldPassword"
                          placeholder="Enter your old password"
                          {...register("oldPassword")}
                        />
                        <span onClick={() => togglePasswordVisibility("oldPassword")} className="input-group-text pointer">
                        {!showPassword.oldPassword  ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      {errors.oldPassword && <div className="required mt-1">{errors?.oldPassword?.message}</div>}
                    </div>

                    <div className="mb-2">
                      <label htmlFor="newPassword" className="form-label font-weight">
                      New Password <span className="required"> *</span>
                      </label>
                      <div className="input-group">
                        <input
                           type={showPassword.newPassword ? "text" : "password"}
                          className="form-control"
                            name="newPassword"
                          placeholder="Enter your new password"
                          disabled={isEmpty(getValues('oldPassword'))} 
                          {...register("newPassword")}
                        />
                        <span onClick={() => togglePasswordVisibility("newPassword")} className="input-group-text pointer">
                        {!showPassword.newPassword   ? <FaEyeSlash /> : <FaEye />}

                        </span>
                      </div>
                      {!isEmpty(getValues('oldPassword')) && errors.newPassword && <div className="required mt-1">{errors?.newPassword?.message}</div>}
                    </div>

                    <div className="mb-2">
                      <label htmlFor="repeatPassword" className="form-label font-weight">
                      Confirm Password <span className="required"> *</span>
                      </label>
                      <div className="input-group">
                        <input
                           type={showPassword.repeatPassword ? "text" : "password"}
                          className="form-control"
                            name="newPassword"
                          placeholder="Enter your repeat password"
                          disabled={isEmpty(getValues('newPassword'))} 
                          {...register("confirmPassword")}
                        />
                        <span onClick={() => togglePasswordVisibility("repeatPassword")} className="input-group-text pointer">
                        {!showPassword.repeatPassword   ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      {!isEmpty(getValues('newPassword')) && errors.confirmPassword && <div className="required mt-1">{errors?.confirmPassword?.message}</div>}
                    </div>
                    
                    {/* <div className="button-container-change">
                        <button type="button" className="save-btn" form="formReset">
                            Change Password
                        </button>
                        <button type="button" className="cancel-btn">
                            Cancel
                        </button>
                    </div> */}
                     <div className="button-container-change mt-4">
                        <button
                            type="submit"
                            className="btn btn-success"
                            id="formChange"
                            // disabled={!isFormValid()}
                        >
                            Save
                        </button>
                        <button type="button" className="ms-2 btn btn-secondary"  onClick={() => navigate("/")}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default ResetPassword;