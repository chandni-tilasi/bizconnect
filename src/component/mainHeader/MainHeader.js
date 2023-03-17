import React from "react";
import "./MainHeader.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-bootstrap";
function header() {
    return (
        <div className="header m-1">
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image
                            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
                            alt="logo"
                            className="w-50 ml-3"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ml-auto me-auto my-2 my-lg-2 mb-2" style={{ maxHeight: "100px" }} navbarScroll>
                            <NavDropdown title="Products" id="navbarScrollingDropdown"></NavDropdown>
                            <NavDropdown title="Teams" id="navbarScrollingDropdown"></NavDropdown>
                            <NavDropdown title="Platform" id="navbarScrollingDropdown"></NavDropdown>
                            <NavDropdown title="Resources" id="navbarScrollingDropdown"></NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <span class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">
                                            Pricing
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Contact Sales
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Log in
                                        </a>
                                    </li>
                                </ul>
                            </span>
                            <Button variant="outline-primary" className="rounded-pill ml-3">
                                Get started →
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default header;