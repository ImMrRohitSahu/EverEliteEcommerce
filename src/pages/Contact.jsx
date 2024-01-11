import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const clearInput = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  const submitHandler = () => {
    if (name && email && message) {
      if (name.length >= 2 && email.length >= 9 && message.length >= 10) {
        clearInput()
        alert("Message Send Successfully...");
      } else {
        setError("We need more details!!!");
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    } else {
      setError("All fields are required!!!");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <>
      <Container fluid className="my-5">
        <Row className="mb-5">
          <Col>
            <h4 className="fw-bold text-center mb-0 fs-1">
              Feel Free To Contact Us
            </h4>
          </Col>
        </Row>
        <Row className="p-0">
          <Col className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8577.262113695404!2d77.89380080905813!3d21.89834420292353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703701830759!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <div className="contact-form-card d-flex flex-column py-3">
              <input
                type="text"
                autoComplete="off"
                placeholder="Enter Your Name..."
                maxLength={20}
                value={name}
                className="mb-4 p-2 fw-bold onFocus"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                autoComplete="off"
                placeholder="Enter Your Email..."
                maxLength={40}
                value={email}
                className="mb-4 p-2 fw-bold onFocus"
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                autoComplete="off"
                placeholder="Enter Your Message..."
                maxLength={100}
                value={message}
                className="mb-4 p-2 fw-bold onFocus"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className="text text-center text-danger fw-bold">{error}</p>
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-danger px-2 me-3 rounded-1" onClick={clearInput}>
                  Cancel
                </button>
                <button className="btn btn-warning px-2 rounded-1" onClick={submitHandler}>
                  Submit
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
