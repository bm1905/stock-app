import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SelectSearch, { fuzzySearch } from "react-select-search";

import * as actions from "../../actions";

import {
  Nav,
  Button,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import DarkThemeToggle from "../theme/DarkThemeToggle";

class Header extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchTickers());
  }

  render() {
    if (this.props.tickers === null || this.props.tickers.length <= 0) {
      return <div>Loading...</div>;
    }

    const countries = [
      { name: "Swedish", value: "sv" },
      { name: "English", value: "en" },
    ];

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="header-container">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/img/logo.png"}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            At All Cost
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <DarkThemeToggle className="theme-container"/>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickers: state.tickers.data,
  };
};

export default connect(mapStateToProps)(Header);
