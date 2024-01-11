import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import route from "../../routes/route.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const AppFooter = () => {
  const { isAuth, contextLogoutHandler } = useContext(AuthContext);
  const logoutHandler = () => {
    contextLogoutHandler();
  };

  return (
    <Container fluid className="mt-5 footer py-3">
      <Row className=" px-0 m-0 my-5 d-flex justify-content-evenly align-items-start">
        <Col xs={5} sm={4} md={3} className="footer-content mb-5">
          <h5 className="mb-4">Get to Know Us</h5>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              About Us
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              FAQ
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Terms & Conditions
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Privacy & Policy
            </Link>
          </p>
        </Col>
        <Col xs={5} sm={4} md={3} className="footer-content mb-5">
          <h5 className="mb-4">Connect with Us</h5>
          <p className="my-1">
            <Link to={route.CONTACT} className="link">
              Contact Us
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Instagram
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Facebook
            </Link>
          </p>
        </Col>
        <Col xs={11} sm={4} md={3} className="footer-content ms-2">
          <h5 className="mb-4">Let Us Help You</h5>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              My Account
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Help
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Customer Support
            </Link>
          </p>
          <p className="my-1">
            <Link to={route.ABOUT} className="link">
              Return Issues
            </Link>
          </p>
          <p className="my-1">
            {isAuth ? (
              <Link className="link" onClick={logoutHandler}>
                Logout???
              </Link>
            ) : (
              <Link className="link" to={route.LOGIN}>
                Login???
              </Link>
            )}
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          className="footer-content px-md-5 px-2 d-flex justify-content-center"
        >
          <h6 className="text-big fs-4">EverElite</h6>
        </Col>
        <Col
          xs={12}
          className="footer-content px-md-5 px-2 d-flex justify-content-center"
        >
          <p>Copyrights © 2023, EverElite.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AppFooter;
