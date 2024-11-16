import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import RPS from './components/RPS';
import MetaMask from './components/MetaMask';
import RPSETHsimple from './components/RPSETH_simple';
import RPSETHv2 from './components/RPSETH_v2';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

//returns a new Web3 object, with provider
function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    //wrapping everything with the provider
    //gives access to all the good stuff for talking to blockchain
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <div>
          <Navigation />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/rock-paper-scissors'>
                <RPS />
              </Route>
              <Route exact path='/metamask'>
                <MetaMask />
              </Route>
              <Route exact path='/rps-ethereum-simple'>
                <RPSETHsimple />
              </Route>
              <Route exact path='/rps-ethereum-v2'>
                <RPSETHv2 />
              </Route>
            </Switch>
        </div>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
