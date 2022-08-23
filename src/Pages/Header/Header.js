import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../src/images/logo_trans.png";
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div >
            <Navbar bg="dark" expand="lg" sticky="top">

                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={logo} height="80" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/home" className='text-white fw-bold'>Home</Nav.Link>
                            <Nav.Link href="home#albums" className='text-white fw-bold'>Albums</Nav.Link>
                            <Nav.Link href="#members" className='text-white fw-bold'>Members</Nav.Link>
                            <Nav.Link href="/blogs" className='text-white fw-bold'>Blogs</Nav.Link>
                            <Nav.Link href="/about" className='text-white fw-bold'>About</Nav.Link>
                            {user ? <button onClick={handleSignOut} className='btn btn-danger fw-bold'> Sign out </button> : <Nav.Link as={Link} to="/login" className='text-danger fw-bold'>Sign In</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;