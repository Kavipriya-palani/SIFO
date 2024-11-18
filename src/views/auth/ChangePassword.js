import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import {isEmpty} from 'lodash'


const ChangePassword = () => {
    const [formData, setFormData] = useState({
        // oldPassword: "",
        // newPassword: "",
        // repeatPassword: "",
        selectedOption: "SMS",
    });
    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        repeatPassword: false,
    });
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

    const isFormValid = () => {
        const { oldPassword, newPassword, repeatPassword, selectedOption } = formData;
        return (
            oldPassword.trim() !== "" &&
            newPassword.trim() !== "" &&
            repeatPassword.trim() !== "" &&
            selectedOption.trim() !== "" &&
            newPassword === repeatPassword
        );
    };

    const onSubmit=()=>{
      console.log("get",getValues('oldpassword'),getValues('newpassword'),getValues('confirmpassword'),getValues('selectedOption'));
      
    }
    const changePasswordSchema = yup.object({
      oldPassword: yup.string().required('Old Password is required'),
      newPassword: yup.string().required('New Password is required'),
      confirmPassword: yup.string().required('Confirm Password is required')
    });
    const {
      register,
      handleSubmit,
      getValues,
      watch,
      formState: { errors },
    } = useForm({
      mode: "onSubmit",
      resolver: yupResolver(changePasswordSchema),
      defaultValues: {
        selectedOption: "SMS"
    }
    });

    watch('oldPassword');
    watch('newPassword');
    watch('confirmPassword')
    watch("selectedOption");


    return (
      <>
        <div className="login-container">
            <div className="login-box">
                <h2 className="text-center text-primary">Change Password</h2>
                <form
                  id="formChange"
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
                    <div className="otpstyle mt-1 font-weight">
                        <p required>OTP Reception</p>
                    </div>

                    <div className="radiogroups">
                        <div>
                            <label>SMS</label>
                            <input
                                type="radio"
                                name="selectedOption"
                                value="SMS"
                                class="ms-1 mt-1"
                                // checked={formData.selectedOption === "SMS"}
                                // onChange={handleInputChange}
                                {...register("selectedOption")}
                            />
                        </div>
                        <div>
                            <label>Mail</label>
                            <input
                                type="radio"
                                name="selectedOption"
                                value="Mail"
                                class="ms-1 mt-1"
                                // checked={formData.selectedOption === "Mail"}
                                // onChange={handleInputChange}
                                {...register("selectedOption")}
                            />
                        </div>
                        <div>
                            <label>Twilio Apps Authy</label>
                            <input
                                type="radio"
                                name="selectedOption"
                                value="Twilio Apps Authy"
                                 class="ms-1 mt-1"
                                // checked={formData.selectedOption === "Twilio Apps Authy"}
                                // onChange={handleInputChange}
                                {...register("selectedOption")}
                            />
                        </div>
                    </div>

                    <div className="button-container-change btn-success">
                        <button
                            type="submit"
                            className="save-btn"
                            id="formChange"
                          
                            // disabled={!isFormValid()}
                        >
                            Save
                        </button>
                        <button type="button" className="cancel-btn ms-2 btn btn-secondary"  onClick={() => navigate("/")}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default ChangePassword;
