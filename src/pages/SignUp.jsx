import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import route from "../routes/route.json";
import { useState } from "react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearInput = () => {
    setFullName("");
    setMobileNumber("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const signUpHandler = () => {
    const mobileREGEX = /^[6-9]\d{9}$/;
    const emailREGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordREGEX =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (fullName < 2 || fullName > 20) {
      setError("Name Should Be Between 2 To 20!!!");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    if (!mobileREGEX.test(mobileNumber)) {
      setError("Invalid Mobile Number!!!");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    if (!emailREGEX.test(email)) {
      setError("Invalid Email ID!!!");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    if (!passwordREGEX.test(password)) {
      setError(
        "Invalid Passwrod Format 1 Upper, 1 Lower, 1 Numeric, 1 Symbol And 8 or Above Character!!!"
      );
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    saveAllUserData({
      fullName,
      mobileNumber,
      email,
      password,
    });

    clearInput();
  };

  const saveAllUserData = (userData) => {
    const existingData = localStorage.getItem("EverEliteUserDataKey")
    const EverEliteUserData = existingData ? JSON.parse(existingData) : []

    EverEliteUserData.push(userData)

    const dataConvert = JSON.stringify(EverEliteUserData)
    localStorage.setItem("EverEliteUserDataKey", dataConvert)
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center mt-4">
        <Col md={6} xs={10}>
          <Card className="p-3">
            <h4 className="text-center text-success-emphasis">
              User Create Account
            </h4>
            <Row className="mt-3 px-md-4">
              <Col>
                <p className="text-center fw-bold text-danger text-small">
                  {error}
                </p>
              </Col>
            </Row>
            <Row className="mb-3 px-md-4">
              <Col>
                <div className="d-flex flex-column my-2">
                  <label className="fw-medium">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="px-2 py-1 fw-medium border rounded-1 input"
                  />
                </div>
                <div className="d-flex flex-column my-2">
                  <label className="fw-medium">Mobile Number</label>
                  <input
                    type="number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="px-2 py-1 fw-medium border rounded-1 input"
                  />
                </div>
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
                  onClick={signUpHandler}
                >
                  Login Now
                </Button>
              </Col>
            </Row>
            <Row className="mt-3 px-md-4">
              <Col className="text-center">
                <button className="toggle-btn">
                  <Link to={`/${route.LOGIN}`} className="link">
                    Have An Account!!! Login Now.
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

export default SignUp;
