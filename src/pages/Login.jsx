import { useContext, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import route from "../routes/route.json";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { contextLoginHandler, everEliteUserData } = useContext(AuthContext);
  const navigate = useNavigate()

  const clearInput = () => {
    setEmail("");
    setPassword("");
    setError("");
  };

  const loginHandler = () => {
    everEliteUserData.map((user, i) => {
      if (user.email === email && user.password === password) {
        contextLoginHandler(i);
        navigate(route.HOME)
      } else {
        setError("Invalid Email ID & Password");
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    });

  };

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center align-items-center mt-4">
        <Col md={7} sm={7}>
          <Card className="p-3">
            <h4 className="text-center text-success-emphasis">User Login</h4>
            <Row className="mt-3 px-md-4">
              <Col>
                <p className="text-center text-danger text-small">{error}</p>
              </Col>
            </Row>
            <Row className="mb-3 px-md-4">
              <Col>
                <div className="d-flex flex-column my-2">
                  <label className="fw-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-2 py-1 fw-medium border rounded-1 input"
                  />
                </div>
                <div className="d-flex flex-column my-2">
                  <label className="fw-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-2 py-1 fw-medium border rounded-1 input"
                  />
                </div>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col className="d-flex justify-content-center align-items-center">
                <Button
                  className="btn btn-danger p-1 px-2 mx-2 fw-medium btn"
                  onClick={clearInput}
                >
                  Cancel
                </Button>
                <Button
                  className="btn btn-success p-1 px-2 mx-2 fw-medium btn"
                  onClick={loginHandler}
                >
                  Login Now
                </Button>
              </Col>
            </Row>
            <Row className="mt-3 px-md-4">
              <Col className="text-center">
                <button className="toggle-btn">
                  <Link className="link" to={`/${route.SIGNUP}`}>
                    Don&apos;t An Account!!! Create Now.
                  </Link>
                </button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
