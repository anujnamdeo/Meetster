import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  var useremail;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      useremail = email;
      navigate("/home");
      console.log(useremail);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="logincontainer">
        <div className="leftsection">
          <img id="logo" src="images/aa.png" alt="" />
          <p id="tagline" >meet new people with common interests as you.</p>
        </div>
        <div className="rightsection">
          <div className="p-4 box">
            {/* <h2 className="mb-3">Firebase Auth Login</h2> */}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Control
                  type="email" className="loginfields"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Control
                  type="password" className="loginfields"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="">
                <Button variant="primary" type="Submit" className="loginbutton">
                  Log In
                </Button>
              </div>
            </Form>
            {/* <hr /> */}

            <div id="line" ></div>


            <div className="createnewacc">
              <Link id="createnewacc" to="/signup">Create new account</Link>
            </div>
          </div>
          <div className="googlebtndiv" >
            <GoogleButton
              className=" googlebutton"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
