import { Component, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Slider from "./Carousel";
import { authActions } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

// async function loginUser(credential) {
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(credential),
//   }).then((data) => {
//     return data.json();
//   });
// }

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        email: "",
        password: "",
      },
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const dispatch = useDispatch();
    if (this.validate()) {
      const email = this.state.input.email;
      const password = this.state.input.password;

      dispatch(authActions.login(email, password));

      // this.props.setToken(token);
    }
  }

  validate() {
    const inputs = this.state.input;
    let errors = {};
    let isValid = true;
    console.log("email", inputs.email);
    if (inputs.email == "") {
      isValid = false;
      errors.email = "Please enter email";
    }

    if (inputs.password == "") {
      isValid = false;
      errors.password = "Please enter password";
    }

    this.setState({
      errors: errors,
    });
    return isValid;
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState((state) => ({
      input: input,
    }));
    if (this.state.touched == true) {
      this.validate();
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={7}>
            <Slider />
          </Col>
          <Col className="login" md={5}>
            <h1 className="align-center">Login</h1>
            <form onSubmit={this.handleSubmit} className="pd-40">
              <div className="form-group">
                <label>Email Address:</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.input.email}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                />

                <div className="text-danger">{this.state.errors.email}</div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.input.password}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Enter password"
                  id="password"
                />

                <div className="text-danger">{this.state.errors.password}</div>
              </div>
              <div className="form-group align-center">
                <Button variant="primary" type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

// function Login({ setToken }) {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await loginUser({
//       username,
//       password,
//     });
//     setToken(token);
//   };
//   return (
//     <Container fluid>
//       <Row>
//         <Col md={7}>
//           <Slider />
//         </Col>
//         <Col className="login" md={5}>
//           <h1 class="align-center">Login</h1>
//           <Form onSubmit={handleSubmit} className="pd-40">
//             <Row>
//               <Col>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     onChange={(e) => setUserName(e.target.value)}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col className="align-center">
//                 <Button variant="primary" type="submit" size="lg">
//                   Submit
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
