import { Fragment } from "react";
import { Route,Routes } from "react-router";
import TopNavbar from "./layouts/TopNavbar";
import Home from './pages/Home';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct'
import Products from './pages/Products'
import Users from './pages/Users'
import P404 from './pages/P404'
import Login from "./pages/Login";

export default function App(){
    return(
        <Fragment>
            <Login />
            <TopNavbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/product" element={<SingleProduct />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/error" element={<P404 />}></Route>
            </Routes>
        </Fragment>
    )
}