import { Route, Routes } from "react-router-dom"
import route from "./route.json"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Products from "../pages/Products"
import Login from "../pages/Login"
import Product from "../pages/Product"
import SignUp from "../pages/SignUp"
import Cart from "../pages/Cart"

const PageRoute = () => {
  return (
    <Routes>
        <Route path={route.HOME} element={<Home/>}></Route>
        <Route path={route.ABOUT} element={<About/>}></Route>
        <Route path={route.CONTACT} element={<Contact/>}></Route>
        <Route path={route.PRODUCTS} >
          <Route index element={<Products/>}></Route>
          <Route path=":pid" element={<Product/>}></Route>
        </Route>
        <Route path={route.LOGIN} element={<Login/>}></Route>
        <Route path={route.SIGNUP} element={<SignUp/>}></Route>
        <Route path={route.CART} element={<Cart/>}></Route>
    </Routes>
  )
}

export default PageRoute