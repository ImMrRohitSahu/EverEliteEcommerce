import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import route from "../routes/route.json";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { AuthContext } from "../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice/cartSlice";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImages] = useState("");
  const [date, setDate] = useState("");
  const { pid } = useParams();
  const { firstName, isAuth } = useContext(AuthContext);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the addItem action with the product details
    dispatch(addItem(product));
  };

  useEffect(() => {
    const options = {
      day: "numeric",
      weekday: "long",
      month: "long",
    };
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 4);
    const formattedDate = futureDate.toLocaleDateString("en-US", options);
    setDate(formattedDate);

    fetch(`https://dummyjson.com/products/${pid}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setImages(data.images);
        setMainImages(data.images[0]);
      });
  }, [pid]);

  const generateRatingStar = Array.from({ length: 5 }, (ele, i) => {
    let num = i + 0.5;
    return (
      <span key={i} className="mb-1">
        {product.rating >= i + 1 ? (
          <IoIosStar className="star" />
        ) : product.rating >= num ? (
          <IoIosStarHalf className="star" />
        ) : (
          <IoIosStarOutline className="star" />
        )}
      </span>
    );
  });

  return (
    <>
      <Container fluid className="mt-4">
        <Row>
          <Col>
            <p className="text fw-bold ms-3">
              <Link className="link text fw-bold" to={`/${route.PRODUCTS}`}>
                products/
              </Link>
              <Link className="link text fw-bold">{product.category}/</Link>
              {product.title}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="my-md-5 my-2 container-product p-md-4 pt-4 p-1">
        <Row className="d-flex justify-content-center">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center mb-md-0 mb-3"
          >
            <div className="multi-image d-flex justify-content-center align-items-center flex-column">
              {images.slice(0, 4).map((image, i) => (
                <div
                  key={i}
                  className={mainImage === image ? "active" : ""}
                  style={{ background: `url(${image})` }}
                  onMouseOver={() => setMainImages(image)}
                ></div>
              ))}
            </div>
            <div
              className="main-img m-auto"
              style={{ background: `url(${mainImage})` }}
            ></div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-start mb-md-0 mb-3"
          >
            <div className="main-product px-1 d-flex flex-column align-items-start">
              <h3 className="product-title">{product.title}</h3>
              <div className="d-flex align-items-center align-items-center brand-rating">
                <span className="brand me-3">by {product.brand}</span>
                {generateRatingStar}
                <span className="ms-2 text text-success">
                  {product.stock * 15} ratings
                </span>
              </div>
              <div className="my-2 d-flex align-items-center">
                <h3 className="m-0">&#8377; {product.price * 84}</h3>
                <del className="fw-bold m-0 mx-3 mt-1 text-danger">
                  &#8377; {product.price * 95}
                </del>
                <h6 className="m-0 mt-1 text-success">
                  {product.discountPercentage}% Off
                </h6>
              </div>
              <span
                className={
                  product.stock > 0
                    ? "text-success fw-bold m-0 ms-1 mb-1"
                    : "text-danger fw-bold m-0 ms-1 mb-1"
                }
              >
                {product.stock > 0 ? "In Stock" : "Out Of Stock"}
              </span>
              <p className="m-0 text ms-1">
                Deliver to : <IoLocationSharp />{" "}
                {isAuth ? `${firstName} - 460001` : "Guest - 460001"}
              </p>
              <p className="m-0 mb-1 ms-1">
                Free Delivery |{" "}
                <strong className="text">Delivery by {date}</strong>{" "}
              </p>
              <p className="ms-1 text">Details : {product.description}</p>
              <div className="product-btn d-flex justify-content-start align-items-center mt-1">
                <button onClick={handleAddToCart}>Add To Cart</button>
                {isAuth ? (
                  <button>
                    <Link to={route.PAYMENT} className="main-link">
                      Buy Now
                    </Link>
                  </button>
                ) : (
                  <button>
                    <Link to={`/${route.LOGIN}`} className="main-link">
                      Buy Now
                    </Link>
                  </button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
