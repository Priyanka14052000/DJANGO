import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function NavbarComponent({ isAuthenticated, onLogout, onToggle }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Authentication App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {isAuthenticated ? (
                            <form onSubmit={onLogout}>
                                <Button type="submit" variant="light">Log out</Button>
                            </form>
                        ) : (
                            <Button onClick={onToggle} variant="light">Register</Button>
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
