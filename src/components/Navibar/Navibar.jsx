import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignOutAlt, FaUser, FaHome } from "react-icons/fa";
import { logout, reset } from "../../redux/auth/authSlice";

const Navibar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [scroll, setScroll] = useState(false);
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        localStorage.removeItem('user')
        navigate("/");
      };

    return(
        <>
        <Navbar
          expand="lg"
          fixed="top"
          className={
            scroll ? "navib navbar-light bg-light" : "navib navbar-light"
          }
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                {" "}
                <FaHome/>
                {" "}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {user && (
                <>
                {/* <Link to='/user' className="btn btn-dark me-2" reloadDocument> <FaUser/> {user.firstName}</Link> */}
                  <button className="btn btn-dark" onClick={onLogout}>
                    <FaSignOutAlt /> Cerrar Sesión
                  </button>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet />
      </>
    )
}
export default Navibar;