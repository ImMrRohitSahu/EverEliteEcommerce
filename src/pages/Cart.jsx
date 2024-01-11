import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../contexts/AuthContext";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  removeAllItems,
} from "../features/cartSlice/cartSlice";

const Cart = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [shippingFee] = useState(99);
  const [extraDiscount] = useState(99);
  const [finalBillAmount, setFinalBillAmount] = useState(0);

  const dispatch = useDispatch();
  const { firstName, isAuth } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.items);

  const increaseQuantityHandler = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const decreaseQuantityHandler = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const removeProductHandler = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const removeAllProductHandler = () => {
    dispatch(removeAllItems());
  };

  useEffect(() => {
    const newTotalProducts = cartItems.reduce(
      (total, item) => total + item.count,
      0
    );
    const newTotalMRP = cartItems.reduce(
      (total, item) => total + item.price * 95 * item.count,
      0
    );
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * 84 * item.count,
      0
    );
    const newTotalDiscount = newTotalMRP - newTotalPrice;
    const newFinalBillAmount =
      newTotalMRP - newTotalDiscount + shippingFee - extraDiscount;

    setTotalProducts(newTotalProducts);
    setTotalMRP(newTotalMRP);
    setTotalPrice(newTotalPrice);
    setTotalDiscount(newTotalDiscount);
    setFinalBillAmount(newFinalBillAmount);
  }, [
    cartItems,
    shippingFee,
    extraDiscount,
    setTotalProducts,
    setTotalMRP,
    setTotalPrice,
    setTotalDiscount,
    setFinalBillAmount,
  ]);

  return (
    <Container className="my-5" fluid>
      <Row className="text-center mb-4">
        <h2 className="fw-bold">
          {isAuth ? `${firstName.split(" ")[0]}'s` : "Your"} Cart
        </h2>
      </Row>
      <Row className="d-flex justify-content-center align-items-start text-center">
        {cartItems.length === 0 ? (
          <p className="fs-4 text-danger">Your cart is empty</p>
        ) : (
          <>
            <Col xs={12} md={8} className="border">
              <Row className="card-table-heading py-2">
                <Col xs={4} className="text-center">
                  <h6 className="my-1 text fw-bold">Products</h6>
                </Col>
                <Col xs={2} className="text-center">
                  <h6 className="my-1 text fw-bold">Price(&#8377;)</h6>
                </Col>
                <Col xs={3} className="text-center">
                  <h6 className="my-1 text fw-bold">Quantity</h6>
                </Col>
                <Col xs={2} className="text-center">
                  <h6 className="my-1 text fw-bold">total(&#8377;)</h6>
                </Col>
                <Col
                  xs={1}
                  className="text-center d-flex justify-content-center align-items-center"
                >
                  <img
                    src="src/assets/delete.gif"
                    width={18}
                    className="cart-delete"
                    onClick={() => removeAllProductHandler()}
                  />
                </Col>
              </Row>
              {cartItems.map((item, i) => (
                <>
                  <Row className="my-2 py-2" key={i}>
                    <Col
                      xs={4}
                      className="text-start d-flex flex-md-row flex-column justify-content-center align-items-md-center"
                    >
                      <div className="cart-product-image me-2">
                        <img src={item.thumbnail} />
                      </div>
                      <div>
                        <h6 className="my-1 text-small fw-bold">
                          {item.title}
                        </h6>
                        <div className="d-flex">
                          <span className="text-small fw-bold">
                            MRP -
                            <del className="fw-bold mx- 1 text-danger text-small">
                              &#8377; {item.price * 95}
                            </del>
                          </span>
                        </div>
                        <h6 className="my-1 text-small fw-bold">
                          Brand -{item.brand}
                        </h6>
                        <p className="my-1 text-small">
                          {item.description.slice(0, 50)}
                        </p>
                      </div>
                    </Col>
                    <Col
                      xs={2}
                      className="text-center d-flex justify-content-center align-items-center"
                    >
                      <h6 className="my-1 text-medium">{item.price * 84}</h6>
                    </Col>
                    <Col
                      xs={3}
                      className="text-center d-flex flex-column justify-content-center align-items-center"
                    >
                      <h6 className="my-1 text-medium">{item.count}</h6>
                      <div className="d-flex mt-2">
                        <Button
                          className="btn-danger m-0 p-0 px-2 me-1"
                          onClick={() => decreaseQuantityHandler(item.id)}
                        >
                          -
                        </Button>
                        <Button
                          className="btn-success m-0 p-0 px-2 ms-1"
                          onClick={() => increaseQuantityHandler(item.id)}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                    <Col
                      xs={2}
                      className="text-center d-flex justify-content-center align-items-center"
                    >
                      <h6 className="my-1 text-medium">
                        {item.price * 84 * item.count}
                      </h6>
                    </Col>
                    <Col
                      xs={1}
                      className="text-center d-flex justify-content-center align-items-center"
                    >
                      <img
                        src="src/assets/delete.gif"
                        width={20}
                        className="cart-delete"
                        onClick={() => removeProductHandler(item.id)}
                      />
                    </Col>
                  </Row>
                </>
              ))}
            </Col>
            <Col xs={10} md={4} className="my-md-0 my-3 billing-col-container">
              <Card className="billing-div my-5 p-3">
                <h4 className="mb-4">Billing Amount</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Total Product : </p>
                      <p>{totalProducts}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Total MRP : </p>
                      <p>&#8377; {totalMRP}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Discount : </p>
                      <p className="text-success">- &#8377; {totalDiscount}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Total Price : </p>
                      <p>&#8377; {totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Shipping Fee : </p>
                      <p className="text-danger">+ &#8377; 99</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Extra Discount : </p>
                      <p className="text-success">- &#8377; 99</p>
                    </div>
                    <div className="border-bottom mb-3"></div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Final Bill Amount : </p>
                      <p className="text-success text-big"> &#8377; {finalBillAmount}</p>
                    </div>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
