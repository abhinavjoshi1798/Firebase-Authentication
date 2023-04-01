import styles from "./Login.module.css";
import InputControl from "../components/InputControl";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmissions = () => {
    if ( !values.email || !values.pass) {
      setErrorMsg("Fill all the fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // console.log(res);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          placeholder="Enter Email Address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <p className={styles.error}>{errorMsg}</p>
          <button disabled={submitButtonDisabled} onClick={handleSubmissions}>Login</button>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">SignUp</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
