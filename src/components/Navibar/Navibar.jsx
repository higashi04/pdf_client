import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignOutAlt, FaHome } from "react-icons/fa";
import { logout, reset } from "../../redux/auth/authSlice";

const Navibar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [scroll, setScroll] = useState(false);
    // const changeNavbarColor = () => {
    //   if (window.scrollY >= 80) {
    //     setScroll(true);
    //   } else {
    //     setScroll(false);
    //   }
    // };
    // window.addEventListener("scroll", changeNavbarColor);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        localStorage.removeItem('user')
        navigate("/");
      };

    return(
        <>
        <Navbar
          bg="light"
          expand="lg"
          fixed="top"
          className={
            scroll ? "navib navbar-light bg-light mb-5" : "navib navbar-light mb-5"
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
                <Link className="btn btn-outline-primary mx-3" to={"/consultarHermanos"}> Consultar Hermanos registrados </Link>
                <Link className="btn btn-outline-primary mx-3" to={"/acomodadores"}>Programa Acomodadores</Link>
                {/* <Link to='/user' className="btn btn-dark me-2" reloadDocument> <FaUser/> {user.firstName}</Link> */}
                  <button className="btn btn-dark mx-3" onClick={onLogout}>
                    <FaSignOutAlt /> Cerrar Sesión
                  </button>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}
export default Navibar;