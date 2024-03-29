import { Col, Container, Row } from "react-bootstrap";
import offerclothone from "/src/assets/offerclothone.jpg"
import offerelectronictwo from "/src/assets/offerelectronictwo.jpg"
import offerhome from "/src/assets/offerhome.jpg"

const OfferSection = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={4} xs={12}>
          <div
            className="offer-card"
            style={{ background: `url(${offerclothone})` }}
          >
            <div className="fade-effect">
              <div className="offer-content">
                <h4 className="m-0 offer-text fw-bold text-big">
                  20% OFF ON CLOTHES
                </h4>
                <p className="m-0 offer-text text">use coupon - CLOTH20</p>
                <p className="m-0 offer-text text-small">
                  Valid up thru 31-Jan-2024
                </p>
                <button className="expolre-btn mt-2">Explore</button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div
            className="offer-card"
            style={{ background: `url(${offerelectronictwo})` }}
          >
            <div className="fade-effect">
              <div className="offer-content">
                <h4 className="m-0 offer-text fw-bold text-big">
                  15% OFF ON ELECTRONICS
                </h4>
                <p className="m-0 offer-text text">use coupon - ELEC15</p>
                <p className="m-0 offer-text text-small">
                  Valid up thru 31-Jan-2024
                </p>
                <button className="expolre-btn mt-2">Explore</button>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} xs={12}>
          <div
            className="offer-card"
            style={{ background: `url(${offerhome})` }}
          >
            <div className="fade-effect">
              <div className="offer-content">
                <h4 className="m-0 offer-text fw-bold text-big">
                  10% OFF ON HOME DECORATE
                </h4>
                <p className="m-0 offer-text text">use coupon - HOME10</p>
                <p className="m-0 offer-text text-small">
                  Valid up thru 31-Jan-2024
                </p>
                <button className="expolre-btn mt-2">Explore</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OfferSection;
