import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <Container className="my-5">
      <Row className="text-center mb-3">
        <h4 className="fw-bold">Shop By Category</h4>
      </Row>
      <Row className="my-3">
        <Col xs={12} md={6} className="my-3">
          <div
            style={{ background: `url("src/assets/clothcategory.jpg")` }}
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
            style={{ background: `url("src/assets/mobilecategory.jpg")` }}
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
            style={{ background: `url("src/assets/laptopcategory.jpg")` }}
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
            style={{ background: `url("src/assets/homecategory.jpg")` }}
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
