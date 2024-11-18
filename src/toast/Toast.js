import React from 'react';
import { useTimeout } from '../hooks/useTimeout';
// import Toast_Icon from "../assets/images/toast-icon.svg";

export const Toast = ({ status = "success", isUndo = false, onCallBack = () => { }, ...props }) => {
  useTimeout(props.close, 5000);
  const onCallBackToast = () => {
    onCallBack()
    props.close()
  }
  return (
    <div className={`${status === "error" ? "toast-err" : status === "warn" ? "toast-warn" : "toast-success"} toast`}>
      <div className="toast__text">
        {/* <img src={Toast_Icon} alt="" />  */}
        {props.children}</div>
      {isUndo && <div className='undo' onClick={onCallBackToast}>Undo</div>}
      {/* <button onClick={props.close} className="toast__close-btn">
        x
      </button> */}
    </div>
  );
};