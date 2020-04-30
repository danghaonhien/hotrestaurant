import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./NavBar";
import About from "./About";
import Reservation from "./../containers/Reservation";
import Tables from "./../containers/Tables";
import Menu from "./../containers/Menu/index";
import Comments from "./../containers/Comments";
import Details from "./../containers/Details";
import Update from "./../containers/Update";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Menu' component={Menu} />
        <Route exact path='/Reservation' component={Reservation} />
        <Route exact path='/Tables' component={Tables} />
        <Route exact path='/Comments' component={Comments} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Details/:customerId' component={Details} />
        <Route exact path='/Update/:customerId' component={Update} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
