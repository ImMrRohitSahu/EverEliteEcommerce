import { Col, Container, Row } from "react-bootstrap";
import shippingImage from "/src/assets/free-shipping.png"
import deliveryImage from "/src/assets/carton-box.png"
import refund from "/src/assets/refund.png"

const InfoSection = () => {
  return (
    <Container className="my-5">
      <Row className="text-center">
        <h4 className="">- FOR YOU WITH LOVE -</h4>
      </Row>
      <Row className="d-flex justify-content-evenly align-items-center line p-0">
        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-center align-items-center my-3"
        >
          <img src={shippingImage} width="30px" />
          <div className="info-content ms-2">
            <h6 className="m-0 text fw-bold">FREE SHIPPING</h6>
            <p className="m-0 text-small fw-bold">
              Free shipping of all order above 500rs
            </p>
          </div>
        </Col>
        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-center align-items-center my-3"
        >
          <img src={deliveryImage} width="30px" />
          <div className="info-content ms-2">
            <h6 className="m-0 text fw-bold">30 Days Return</h6>
            <p className="m-0 text-small fw-bold">
              Simply return product within 30 days
            </p>
          </div>
        </Col>
        <Col
          xs={6}
          md={4}
          className="d-flex justify-content-center align-items-center my-3 mt-md-3 md-4"
        >
          <img src={refund} width="30px" />
          <div className="info-content ms-2">
            <h6 className="m-0 text fw-bold">Payment Secure</h6>
            <p className="m-0 text-small fw-bold">
                Get easy amount refund on returns
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoSection;
