import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./components/Contact/ContactUs";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import SignUp from "./components/SignUp/SignUp";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/user" exact>
            <UserPage />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
