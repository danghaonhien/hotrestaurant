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
        <Route path='/menu' component={Menu} />
        <Route path='/reservation' component={Reservation} />
        <Route path='/tables' component={Tables} />
        <Route path='/comments' component={Comments} />
        <Route path='/about' component={About} />
        <Route path='/details/:customerId' component={Details} />
        <Route path='/update/:customerId' component={Update} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
