import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => (
<Navbar collapseOnSelect expand='sm' bg='primary' variant='dark'>
    <Container>
        <Navbar.Brand>React + Solidity</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/rock-paper-scissors' className='nav-link'>Rock, Paper, Scissors</Link>
                <Link to='/metamask' className='nav-link'>MetaMask Login</Link>
                <Link to='/rps-ethereum-simple' className='nav-link'>PvC ETH RPS</Link>
                <Link to='/rps-ethereum-v2' className='nav-link'>RPS PvP</Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Navigation