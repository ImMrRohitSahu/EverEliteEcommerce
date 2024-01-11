import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FeaturedContextApi } from "../../contexts/FeaturedContextApi";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const { featuredApi } = useContext(FeaturedContextApi);

  return (
    <Container fluid className="my-3 featured-container py-2">
      <Row className="text-center my-4">
        <h4 className="fw-bold m-0">Our Featured Products</h4>
      </Row>
      <Row className="d-flex justify-content-center align-items-center px-2 mb-3">
        {featuredApi.slice(0, 10).map((product, index) => {
          return (
            <Col
              key={index}
              lg={2}
              md={3}
              sm={4}
              xs={6}
              className="d-flex justify-content-center align-items-center mx-md-2 mx-0 my-4"
            >
              <Link className="link">
                <div className="product-card">
                  <div className="product-image">
                    <img src={product.image} />
                    <h6 className="category text-small">{product.category}</h6>
                  </div>
                  <div className="product-details p-1 px-2 pb-2 d-flex flex-column justify-content-around">
                    <h6 className="m-0 text-medium ">{product.name}</h6>
                    <h6 className="m-0 text-small fw-bold">{product.company}</h6>
                    <div className="d-flex justify-content-between align-items-end">
                      <h6 className="m-0 text-medium ">&#8377; {product.price/10}</h6>
                      <h6 className="m-0 text fw-bold text-success">&#9733; 4.6</h6>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default FeaturedProduct;
