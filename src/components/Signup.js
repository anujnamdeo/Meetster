import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

// testiing mode 
import { database } from '../firebase'
import { ref, push, child, update } from "firebase/database";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  var userregemail;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      userregemail = email;
      navigate("/");
      console.log(userregemail);
    } catch (err) {
      setError(err.message);
    }

    //tesing mode
    let obj = {
      userregemail: email,
      firstName: firstName,
      userpassword: password,
    }
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
  };
  {/* testing section  */ }
  const [firstName, setFirstName] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
  }

  return (
    <>
      <div className="signupcontainer">
        <div className="box">
          <img id="registerlogo" src="images/aa.png" alt="" />
          <p className="mb-3" id="registerheading" >Register for free today.</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>

            {/* testing section  */}

            <div className="username">
              <label className="form__label " for="firstName"></label>
              <input className="form__input registerfields" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="Full Name" />
            </div>

            {/* <div class="footer">
              <button type="submit" class="btn">Register</button>
            </div> */}

            {/* testing section  */}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className="registerfields"
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control className="registerfields"
                type="password"
                placeholder="Password (min. 6 characters)"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="">
              <Button variant="primary" type="Submit" className="loginbutton">
                Sign up
              </Button>
            </div>
          </Form>
          <div className="haveanacc">
            Have an account? <Link id="loginlink" to="/">Log In</Link>
          </div>
          <div>
            <p id="registerwarning" >By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
