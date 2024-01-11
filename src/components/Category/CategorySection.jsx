import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import clothcategory from "/src/assets/clothcategory.jpg"
import mobilecategory from "/src/assets/mobilecategory.jpg"
import laptopcategory from "/src/assets/laptopcategory.jpg"
import homecategory from "/src/assets/homecategory.jpg"

const CategorySection = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-3">
        <h4 className="fw-bold">Shop By Category</h4>
      </Row>
      <Row className="my-3">
        <Col xs={12} md={6} className="my-3">
          <div
            style={{ background: `url(${clothcategory})` }}
            className="w-100 category-card"
          >
            <Link className="link w-100 h-100  d-flex justify-content-center align-items-center">
              <h1 className="fw-bold bgcolor-category-heading px-3 py-2 m-0">
                CLOTHES
              </h1>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-3">
          <div
            style={{ background: `url(${mobilecategory})` }}
            className="w-100 category-card"
          >
            <Link className="link w-100 h-100  d-flex justify-content-center align-items-center">
              <h1 className="fw-bold bgcolor-category-heading px-3 py-2 m-0">
                MOBILES
              </h1>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-3">
          <div
            style={{ background: `url(${laptopcategory})` }}
            className="w-100 category-card"
          >
            <Link className="link w-100 h-100  d-flex justify-content-center align-items-center">
              <h1 className="fw-bold bgcolor-category-heading px-3 py-2 m-0">
                LAPTOPS
              </h1>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-3">
          <div
            style={{ background: `url(${homecategory})` }}
            className="w-100 category-card"
          >
            <Link className="link w-100 h-100  d-flex justify-content-center align-items-center">
              <h1 className="fw-bold bgcolor-category-heading px-3 py-2 m-0">
                HOME
              </h1>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CategorySection;
