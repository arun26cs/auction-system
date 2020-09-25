import React from 'react';
 
import './App.css';
import Nav from './components/nav';
import Auction from './components/Auction';
import Bid from './components/Bid';
import Home from './components/home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Auction" component={Auction}/>
        <Route path="/Bid" component={Bid}/>
        </Switch>
        
         
      </div>
    </Router>
    
  );
}

export default App;
