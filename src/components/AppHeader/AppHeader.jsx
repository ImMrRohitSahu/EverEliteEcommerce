import { Col, Container, Row } from "react-bootstrap";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import route from "../../routes/route.json";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";

const AppHeader = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const { isAuth, firstName, email, mobile, contextLogoutHandler } =
    useContext(AuthContext);

  const cartItems = useSelector((state) => state.cart.items);
  useEffect(()=>{
    setCartItemCount(cartItems.length)
  },[cartItems])

  const handleResize = () => {
    setIsOpenNav(false);
  };

  const handleScroll = () => {
    setIsOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const manuCloseLinkHandler = () => {
    setIsOpenNav(false);
  };

  return (
    <Headroom>
      <Container fluid className="header px-3" id="top">
        <Row className="w-100 h-100 d-flex justify-content-between">
          <Col
            md={5}
            xs={8}
            className="h-100 d-flex align-items-center justify-content-start"
          >
            <IoMdArrowDropdownCircle className="right-dropdown m-0 me-4 fs-4" />
            <h4 className="brand-name m-0">EverElite</h4>
          </Col>
          <Col
            md={4}
            className="h-100 d-none d-md-flex align-items-center justify-content-between"
          >
            <ul className="w-100 h-100 m-0 p-0 nav-ul d-md-flex justify-content-evenly align-items-center">
              <li className="nav-li">
                <NavLink to={route.HOME} className="link">
                  Home
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={route.PRODUCTS} className="link">
                  Products
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={route.ABOUT} className="link">
                  About
                </NavLink>
              </li>
              <li className="nav-li">
                <NavLink to={route.CONTACT} className="link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col
            md={3}
            xs={4}
            className="h-100 d-flex align-items-center justify-content-end p-0"
          >
            {isAuth ? (
              <h6 className="d-md-block d-none m-0 fw-bold text me-4 mt-1">
                {firstName.split(" ")[0]}
              </h6>
            ) : (
              <button className="login-btn d-md-block d-none m-0 fw-bold text me-4 mt-1">
                <Link to={route.LOGIN} className="link">
                  Login
                </Link>
              </button>
            )}

            <div className="m-0 p-0 cart-div h-100 d-flex align-items-center">
              <NavLink to={route.CART} className="link">
                <img src="src/assets/cart.gif" width={30}/>
                <span className="cart-value">{cartItemCount}</span>
              </NavLink>
            </div>
            <RiMenuFill
              className={
                isOpenNav
                  ? "d-block d-md-none fs-3 mt-1 ms-4 rotate transition"
                  : "d-block d-md-none fs-3 mt-1 ms-4 transition"
              }
              onClick={() => setIsOpenNav(!isOpenNav)}
            />
          </Col>
        </Row>
      </Container>
      {isOpenNav && (
        <Row className="nav-open-close">
          <div
            className={
              isOpenNav ? "openNavDiv transition" : "closeNavDiv transition"
            }
          >
            <div>
              <div className="userProfile w-100 py-4 mb-3 text-center">
                <div className="userImage m-auto">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                </div>
                <h6 className="m-0 mt-2 text fw-bold">{firstName}</h6>
                <h6 className="m-0 mt-2 text-small fw-bold">{email}</h6>
                <h6 className="m-0 mt-2 text-small fw-bold">{mobile}</h6>
              </div>
              <div className="navdiv pb-3">
                <ul className="w-100 m-0 p-0 nav-ul d-flex flex-column justify-content-start align-items-center">
                  <li className="nav-li my-2">
                    <NavLink
                      to={route.HOME}
                      className="link"
                      onClick={manuCloseLinkHandler}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-li my-2">
                    <NavLink
                      to={route.PRODUCTS}
                      className="link"
                      onClick={manuCloseLinkHandler}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-li my-2">
                    <NavLink
                      to={route.ABOUT}
                      className="link"
                      onClick={manuCloseLinkHandler}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-li my-2">
                    <NavLink
                      to={route.CONTACT}
                      className="link"
                      onClick={manuCloseLinkHandler}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navLogin d-flex flex-column align-items-center my-1 py-1">
                {isAuth ? (
                  <>
                    <button
                      className="fw-bold text my-2"
                      onClick={() => contextLogoutHandler()}
                    >
                      Sign Out??? Or
                    </button>
                    <button className="text-small fw-bold" disabled>
                      Dont Have Any Account!!!
                    </button>
                  </>
                ) : (
                  <>
                    <button className="fw-bold text my-2" disabled>
                      Sign Out??? Or
                    </button>
                    <button className="text-small fw-bold">
                      <Link to={route.LOGIN} className="link">
                        Want to login now???
                      </Link>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Row>
      )}
    </Headroom>
  );
};

export default AppHeader;
