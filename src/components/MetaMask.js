import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Injected } from './wallet/Connectors';
import { useWeb3React } from '@web3-react/core';

export default function MetaMaskExample() {
    // Destructure the necessary hooks from useWeb3React
    const { active, account, activate, deactivate } = useWeb3React();

    // Function to connect to MetaMask
    async function connectToMetaMask() {
        try {
            console.log("Attempting to connect to MetaMask...");
            // Check if MetaMask is installed
            if (!window.ethereum) {
                console.error("MetaMask is not installed!");
                return;
            }
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Activate the injected connector
            await activate(Injected);
            console.log("Connected to MetaMask successfully!");
        } catch (ex) {
            if (ex instanceof NoEthereumProviderError) {
                console.error("MetaMask is not installed! Please install it to use this app.");
            } else if (ex instanceof UserRejectedRequestErrorInjected) {
                console.error("User rejected the connection request!");
            } else {
                console.error("An unknown error occurred:", ex);
            }
        }
    }

    // Function to disconnect MetaMask
    async function disconnectMetaMask() {
        try {
            await deactivate(); // Deactivates the current connection
        } catch (ex) {
            console.log(ex);
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col className="text-center">
                    <h1>This is for test and development</h1>
                    <h3>not for real ETH exchange/transaction</h3>
                    <h4>Test Wallets Only</h4>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    {active ? (
                        <span>
                            Connected Account: <b>{account}</b>
                        </span>
                    ) : (
                        <span>Not Connected</span>
                    )}
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    <Button onClick={connectToMetaMask}>Connect to MetaMask</Button>
                </Col>
                <Col className="text-center">
                    <Button onClick={disconnectMetaMask}>Disconnect</Button>
                </Col>
            </Row>
        </Container>
    );
}
