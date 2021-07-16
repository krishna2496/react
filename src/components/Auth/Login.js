import { Component, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Slider from "./Carousel";

async function loginUser(credential) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((data) => {
    return data.json();
  });
}

const handleSubmit = async (e) => {
  console.log(props);
  //   e.preventDefault();
  //   const token = await loginUser({
  //     username,
  //     password,
  //   });
  //   setToken(token);
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(event) {
    const targetV = event.target;
    const value = targetV.value;
    const name = targetV.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={7}>
            <Slider />
          </Col>
          <Col className="login" md={5}>
            <h1 class="align-center">Login</h1>
            <Form onSubmit={handleSubmit} className="pd-40">
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={this.handleFormChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={this.handleFormChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="align-center">
                  <Button variant="primary" type="submit" size="lg">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
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
