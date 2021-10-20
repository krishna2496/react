import React, { Component, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import Slider from "./Carousel";
import { authActions } from "../../actions/authActions";
import { sliderActions } from "../../actions/sliderAction";
import { commonActions } from "../../actions/commonAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const touched = false;
  const { email, password } = inputs;
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useSelector((state) => state.alertReducer);
  let sliders = [];

  useEffect(() => {
    dispatch(sliderActions.slider());
  }, [dispatch]);

  sliders = useSelector((state) => state.slider);
  useEffect(() => {
    sliders = sliders.data;
  }, [sliders]);

  const langCode = useSelector((state) => state.langReducer.lang);

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      setError({
        ...errors,
        emailErr: "",
        passwordErr: "",
      });
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(authActions.login(email, password, from));
    }
  }

  function validate() {
    let isValid = true;
    let errors = {
      emailErr: "",
      passwordErr: "",
    };

    if (inputs.email == "") {
      isValid = false;
      errors.emailErr = "Please enter email";
    }

    if (inputs.password == "") {
      isValid = false;
      errors.passwordErr = "Please enter password";
    }

    setError({
      ...errors,
      emailErr: errors.emailErr,
      passwordErr: errors.passwordErr,
    });

    return isValid;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function langChange(e) {
    dispatch(commonActions.changeLang(e.target.value));
    /* console.log(e.target.value); */
  }

  return (
    <Container fluid>
      {sliders.loading && <Loader />}
      {!sliders.loading && (
        <Row>
          <Col md={7}>
            <Slider slider={sliders} langCode={langCode} />
          </Col>
          <Col md={5}>
            <div className="align-right">
              <form className="langName pd-40 ">
                <select
                  name="lang"
                  onChange={langChange}
                  className="form-control wd-100"
                  value={langCode}
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
              </form>
            </div>
            {alert && alert.message && (
              <Alert key="0" variant={alert.type}>
                {alert.message}
              </Alert>
            )}
            <div className="login">
              <h1 className="align-center">Login</h1>

              <form onSubmit={handleSubmit} className="pd-40">
                <div className="form-group">
                  <label>Email Address:</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                  />

                  <div className="text-danger">{errors.emailErr}</div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter password"
                    id="password"
                  />
                  <div className="text-danger">{errors.passwordErr}</div>
                </div>
                <div className="form-group align-center">
                  <Button variant="primary" type="submit" size="lg">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Login;
