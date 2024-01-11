import { Col, Container, Row } from "react-bootstrap";
import route from "../routes/route.json"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <h4 className="fw-bold fs-1 text-center">ABOUT US</h4>
      </Row>
      <Row className="d-flex justify-content-center align-items-center mb-5">
        <Col
          xs={8}
          md={5}
          className="d-flex justify-content-center align-items-center me-md-3 me-0 mb-md-0 mb-4"
        >
          <div className="about-img-div">
            <img src="src/assets/about.png" />
          </div>
        </Col>
        <Col
          xs={10}
          md={4}
          className="d-flex flex-column justify-content-center align-items-center about-content"
        >
          <h5 className="fw-bold fs-2 ">Our Mission & Vision</h5>
          <p className="text-big fw-light mt-4">
            We are a team of dedicated, hard-working individuals with a passion
            for fashion and providing quality products and services to our
            customers. We believe that fashion is simply a medium for
            self-expression and strive to help our customers express themselves
            with our trendy, stylish designs made from only the best quality
            fabric.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <h4 className="fw-bold fs-2 text-center">Why Choose Us?</h4>
      </Row>
      <Row className="d-flex justify-content-evenly">
        <Col xs={10} md={3} className="d-flex justify-content-center mb-3">
          <div className="why-us-content p-4">
            <h4 className="fw-bold">100% Guarantee</h4>
            <p className="fs-6">
              Not happy with your purchase? Get 100% money back by returning
              within 30 days of purchase.
            </p>
          </div>
        </Col>
        <Col xs={10} md={3} className="d-flex justify-content-center mb-3">
          <div className="why-us-content p-4">
            <h4 className="fw-bold">Worldwide Free Shipping</h4>
            <p className="fs-6">
              We do not charge extra to get your products delivered to your
              doorstep. Order from anywhere around the world.
            </p>
          </div>
        </Col>
        <Col xs={10} md={3} className="d-flex justify-content-center mb-3">
          <div className="why-us-content p-4">
            <h4 className="fw-bold">24/7 Support</h4>
            <p className="fs-6">
              We have the friendliest and most dedicated customer support who
              stay online 24/7 to help you with your needs.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-5 d-flex justify-content-center">
        <Col xs={12} md={8} >
          <div className="about-image-girl-div d-flex flex-md-row flex-column justify-content-center p-4">
            <div className="content text-md-start text-center">
              <h1 className="fw-bold mb-5">Enjoy up to 70% off!</h1>
              <p className="fs-5 mb-5">
                Grab your limited-time discount and enjoy 70& off on all our
                products
              </p>
              <button className="about-shop-btn">
                <Link to={`/${route.PRODUCTS}`} className="fs-5 link">Shop</Link>
              </button>
            </div>
            <div className="girl-image">
              <img src="src/assets/aboutgirl.png" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
