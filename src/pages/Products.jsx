import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FeaturedContextApi } from "../contexts/FeaturedContextApi";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const [clickedCategory, setClickedCategory] = useState("");
  const { productsApi } = useContext(FeaturedContextApi);

  const categoryClickedHandler = (value) => {
    setClickedCategory(value);
  };

  const filteredProducts = productsApi.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const categoryMatch =
      clickedCategory === ""
        ? product.category.toLowerCase().includes(searchInput.toLowerCase())
        : product.category
            .toLowerCase()
            .includes(clickedCategory.toLowerCase());

    // if (titleMatch && categoryMatch) {
    //   return true;
    // }
    if (clickedCategory) {
      return categoryMatch;
    }
    return titleMatch || categoryMatch;
  });

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="search-input-div d-flex align-items-center">
              <input
                type="text"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search Product "
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              {searchInput.length > 0 ? (
                <IoMdClose
                  className="search-icon fs-5 me-2"
                  onClick={() => setSearchInput("")}
                />
              ) : (
                <FiSearch className="search-icon fs-5 me-2" />
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row className="category-parent">
          <Col xs={12} md={3} className="text-center category-fixed">
            <h3 className="my-3">Categories</h3>
            <div className="d-flex flex-md-column justify-content-center flex-wrap">
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("")}
                >
                  ALL
                </Link>
              </span>
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="smartphones" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("smartphones")}
                >
                  MOBILES
                </Link>
              </span>
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="laptops" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("laptops")}
                >
                  LAPTOPS
                </Link>
              </span>
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="home-decoration" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("home-decoration")}
                >
                  HOME DECORATE
                </Link>
              </span>
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="groceries" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("groceries")}
                >
                  GROCERIES
                </Link>
              </span>
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="skincare" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("skincare")}
                >
                  BEAUTY
                </Link>
              </span>
              <span className="m-2 my-md-2 my-1 p-1 text-medium">
                <Link
                  className= {clickedCategory==="fragrances" ? "link selected" : "link" }
                  onClick={() => categoryClickedHandler("fragrances")}
                >
                  FRAGRANCES
                </Link>
              </span>
            </div>
          </Col>
          <Col xs={12} md={9} className="slide-right">
            <Container fluid className="my-3 featured-container py-2">
              {filteredProducts.length === 0 ? (
                <Row>
                  <Col className="d-flex justify-content-center align-items-center my-3">
                    <h3>Sorry!!! Not found any item.</h3>
                  </Col>
                </Row>
              ) : (
                <Row className="d-flex justify-content-start align-items-center mb-3">
                  {filteredProducts.map((product, index) => {
                    return (
                      <Col
                        key={index}
                        md={3}
                        sm={4}
                        xs={6}
                        className="d-flex justify-content-center align-items-center mx-0 my-4"
                      >
                        <Link to={`${product.id}`} className="link">
                          <div className="product-card products-card">
                            <div className="product-image">
                              <img src={product.thumbnail} />
                              <h6 className="category text-small">
                                {product.category}
                              </h6>
                            </div>
                            <div className="product-details px-2 pb-2 d-flex flex-column justify-content-evenly">
                              <h6 className="m-0 text fw-bold ">
                                {product.title.slice(0, 15)}
                              </h6>
                              <h6 className="m-0 text-small fw-bold">
                                {product.brand}
                              </h6>
                              <div className="d-flex justify-content-between align-items-start">
                                <h6 className="m-0 text fw-bold ">
                                  &#8377; {product.price * 84}
                                </h6>
                                <h6 className="m-0 text-small fw-bold text-success">
                                  &#9733; {product.rating.toFixed(1)}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
