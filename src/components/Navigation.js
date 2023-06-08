import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Navigation.scss';
import logo from '../assets/logo.svg'

const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href="#">
                    <img src={logo} height={30} className='d-inline-block aligin-top' alt='Magbank logo' />

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

                        <Nav.Link href="#action1">Cartao</Nav.Link>
                        <Nav.Link href="#action2"> Quem somos</Nav.Link>
                        <Nav.Link href="#action3"> Faq</Nav.Link>
                    </Nav>
                    <buttonGroup>
                        <Button variant="outline-light" >
                            <NavDropdown title="Acessera a minha conta" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action4">
                                    Pessoa fisica
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action5">
                                    Pessoa juridica
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                        <Button variant="outline-light" >
                            abra sua conta
                        </Button>
                    </buttonGroup>
                </Navbar.Collapse>
            </Container>        </Navbar>
    )
}

export default Navigation;