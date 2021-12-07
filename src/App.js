import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import Homepage from './pages/Homepage';

const useStyles=makeStyles(()=>({
  App:{
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}))
function App() {
  const classes=useStyles();
  return (
    <Router>
    <div className={classes.App} >
      <Header/>
      <Route path="/" exact component={Homepage}/>
      <Route path="/coins/:id" exact component={CoinPage}/>
    </div>
    </Router>
  );
}

export default App;
