// import React, { useEffect, useState } from 'react';
// import { onJustReducerUpdate } from '../../redux/action';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { LOGIN_DETAILS } from '../../constant/constant';
// import { onGetLoginDetails } from '../../services';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false); 
//   const [SubmitValue, setSubmitValue] = useState(false);

//   const profileDetails = useSelector((state) => state.loginDetails);
//   console.log("profileDetails", profileDetails);
  
//   const dispatch = useDispatch();

//   useEffect(() => {
//     onGetLoginDetails().then((res) => {
//       dispatch(onJustReducerUpdate(res.data, LOGIN_DETAILS));
//       localStorage.setItem(LOGIN_DETAILS, JSON.stringify(res));
//       console.log("user", res);
//     });
//   }, [dispatch]);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const loginSchema = yup.object({
//     email: yup.string().required('Email is required').nullable(),
//     password: yup.string().required('Password is required').nullable()
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//     watch,
//   } = useForm({ resolver: yupResolver(loginSchema) });

//   watch("email");
//   watch("password");

//   const onSubmit = (data) => {
//     setSubmitValue(true);
//     console.log("Submitted values:", data);
//   };

//   useEffect(() => {
//     if (SubmitValue) {
//       console.log("Form submitted with:", getValues("email"), getValues("password"));
//     }
//   }, [SubmitValue, getValues]);

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form id="formLogin" onSubmit={handleSubmit(onSubmit)}>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               {...register("email")}
//             />
//             {(errors.email && SubmitValue) && (
//               <div className="required">{errors.email.message}</div>
//             )}
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter your password"
//                 {...register("password")}
//               />
//               <span onClick={togglePasswordVisibility} className="eye-icon">
//                 {showPassword ? <FaEye /> : <FaEyeSlash />}  
//               </span>
//             </div>
//             {(errors.password && SubmitValue) && (
//               <div className="required">{errors.password.message}</div>
//             )}
//           </div>
//           <button type="submit" className="login-btn" form="formLogin">
//             Login
//           </button>
//         </form>
//         <div className="forgot-password">
//           <Link to="/forgotpassword">Forgot Password?</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onJustReducerUpdate } from '../../redux/action';
import { LOGIN_DETAILS } from '../../constant/constant';
import { onGetLoginDetails } from '../../services';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { useToast } from "../../toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 

  const profileDetails = useSelector((state) => state.loginDetails);
  const dispatch = useDispatch();

  const loginSchema = yup.object({
    email: yup.string().email('Enter a valid Email Address').required('Email is required'),
    password: yup.string().required('Password is required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema)
  });
  const toast = useToast();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log('Login details:', data);
    navigate('/dashboard');
    localStorage.setItem("authData",JSON.stringify(data))
  };

  useEffect(() => {
    onGetLoginDetails().then((res) => {
      dispatch(onJustReducerUpdate(res, LOGIN_DETAILS));
      localStorage.setItem(LOGIN_DETAILS, JSON.stringify(res));
    });
  }, [dispatch]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
//
//
  return (
    // orginal
  //   <div className="login-container">
  //   <div className="login-box">
  //     <h2 class="text-center">Sign in to your account</h2>
  //     <form id="formLogin" onSubmit={handleSubmit(onSubmit)} className="p-5  shadow-sm">
        
  //       {/* Email Input */}
  //       <div className="mb-3">
  //         <label htmlFor="email" className="form-label">
  //           Email <span className="required"> *</span>
  //         </label>
  //         <input
  //           type="email"
  //           className="form-control"
  //           placeholder="Enter your email"
  //           {...register("email")}
  //         />
  //         {errors.email && <div className="required">{errors.email.message}</div>}
  //       </div>
  
  //       {/* Password Input with Eye Icon */}
  //       <div className="mb-3">
  //         <label htmlFor="password" className="form-label">
  //           Password <span className="required"> *</span>
  //         </label>
  //         <div className="input-group">
  //           <input
  //             type={showPassword ? "text" : "password"}
  //             className="form-control"
  //             placeholder="Enter your password"
  //             {...register("password")}
  //           />
  //           <span onClick={togglePasswordVisibility} className="input-group-text pointer">
  //             {showPassword ? <FaEye /> : <FaEyeSlash />}
  //           </span>
  //         </div>
  //         {errors.password && <div className="required">{errors.password.message}</div>}
  //       </div>
  
  //       <button type="submit" className="btn btn-primary w-100 mt-2 p-2">
  //         Login
  //       </button>
  //     </form>
  //   </div>
  // </div>

  <div className="login-container">
  <div className="login-box">
    <h2 class="text-center text-primary">Sign In to your account</h2>
    <form
      id="formLogin"
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
  

      <div className="mb-2">
        <label htmlFor="password" className="form-label font-weight">
          Password <span className="required"> *</span>
        </label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter your password"
            {...register("password")}
          />
          <span onClick={togglePasswordVisibility} className="input-group-text pointer">
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && <div className="text-danger mt-1">{errors.password.message}</div>}
      </div>

      <button type="submit" form="formLogin" className="btn btn-success w-100 mt-3 p-2">
        Login
      </button>
    </form>
    <div className="forgot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
  </div>
</div>


// org
// {/* <div className="login-container">
//   <div className="login-box">
//     <h2 class="text-center">Login</h2>
//     <form id="formLogin" onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email <span className="required"> *</span>
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter your email"
//           {...register("email")}
//         />
//         {errors.email && <div className="text-danger">{errors.email.message}</div>}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">
//           Password <span className="required"> *</span>
//         </label>
//         <div className="input-group">
//           <input
//             type={showPassword ? "text" : "password"}
//             className="form-control"
//             placeholder="Enter your password"
//             {...register("password")}
//           />
//           <span onClick={togglePasswordVisibility} className="input-group-text">
//             {showPassword ? <FaEye /> : <FaEyeSlash />}
//           </span>
//         </div>
//         {errors.password && <div className="text-danger">{errors.password.message}</div>}
//       </div>

//       <button type="submit" className="login-btn">
//         Login
//       </button>
//     </form>
//   </div>
// </div> */}


  
  
//  
    // <div className="login-container">
    //   <div className="login-box">
    //     <h2>Login</h2>
    //     <form id="formLogin" onSubmit={handleSubmit(onSubmit)}>
    //       <div className="input-group">
    //         <label htmlFor="email">
    //           Email <span className="required"> *</span>
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="Enter your email"
    //           {...register("email")}
    //         />
    //         {errors.email && (
    //           <div className="required">{errors.email.message}</div>
    //         )}
    //       </div>

        //  * <div className="input-group">
        //     <label htmlFor="email">
        //       Password <span className="required"> *</span>
        //     </label>
        //     <div className="password-wrapper">
        //     <input
        //       type={showPassword ? 'text' : 'password'}
        //       placeholder="Enter your password"
        //       {...register("password")}
        //     />
        //      <span onClick={togglePasswordVisibility} className="eye-icon">
        //         {showPassword ? <FaEye /> : <FaEyeSlash />}
        //       </span>
        //       </div>
        //     {errors.email && (
        //       <div className="required">{errors.email.message}</div>
        //     )}

        //   </div> 

        
          
        //  <div className="input-group">
        //     <label htmlFor="password">
        //       Password <span className="required"> *</span>
        //     </label>
        //     <div className="password-wrapper">
        //       <input
        //         type={showPassword ? 'text' : 'password'}
        //         placeholder="Enter your password"
        //         {...register("password")}
        //       />
        //       <span onClick={togglePasswordVisibility} className="eye-icon">
        //         {showPassword ? <FaEye /> : <FaEyeSlash />}
        //       </span>
        //     </div>
        //     {errors.password && (
        //       <div className="required">{errors.password.message}</div>
        //     )}
        //   </div> 
          

    //       <button type="submit" className="login-btn" form="formLogin">
    //         Login
    //       </button>
    //     </form>
        
    //     <div className="forgot-password">
    //       <Link to="/forgotpassword">Forgot Password?</Link>
    //     </div>
    //   </div>
    // </div>
    
  );
};

export default Login;
