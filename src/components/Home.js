import logo from '../logo.svg';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className='text-center'>
                    <h1>
                        ROCK PAPER SCISSORS!!!!
                    </h1>
                </Col>
            </Row> 
            <Row>
                <Col className='text-center'>
                    <Image src={logo} className="App-logo" alt="logo" fluid />
                </Col>
            </Row> 
            <Row>
                <Col className='text-center'>
                    <h2>
                        GoChain
                    </h2>
                </Col>
            </Row> 
        </Container>
    )
}

export default Home
