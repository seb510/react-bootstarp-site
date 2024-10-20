import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Виправлено імпорти Router
import {
    Button,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
} from "react-bootstrap";
import Logo from './logo192.png';

// Імпорт компонентів для маршрутів
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import NotFound from "../Pages/NotFound";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand as={Link} to="/"> {/* Використовуємо Link замість href */}
                            <img
                                src={Logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />{" "}
                            <b>React Site</b>
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
                            <Nav className="mr-auto">
                                <NavLink as={Link} to="/">Home</NavLink>
                                <NavLink as={Link} to="/about">About Us</NavLink>
                                <NavLink as={Link} to="/contacts">Contacts</NavLink>
                                <NavLink as={Link} to="/blog">Blog</NavLink>
                            </Nav>
                            <Form className="d-flex align-items-center">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="m-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Маршрути для різних сторінок */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        );
    }
}
