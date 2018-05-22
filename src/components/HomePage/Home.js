import React from "react";
import { Row, Col, Container, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import MaterialIcon from "material-icons-react";

export const HomePage = () => (
  <ListGroup className="home-menu">
    <NavLink
      tag="a"
      className="ripple list-group-item-action list-group-item"
      to="/create-profile"
    >
      Create Voice Pass Profile
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </NavLink>
    
    <NavLink
      tag="a"
      className="ripple list-group-item-action list-group-item"
      to="/enroll-profile"
    >
      Enroll
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </NavLink>
    <NavLink
      tag="a"
      className="ripple list-group-item-action list-group-item"
      to="/enrollment-status"
    >
      Enrollment Status
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </NavLink>
    <ListGroupItem tag="a" className="ripple" href="#" action>
    Perform Transaction
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </ListGroupItem>
    <ListGroupItem tag="a" className="ripple" href="#" action>
    Transaction Status
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </ListGroupItem>
    <ListGroupItem tag="a" className="ripple" href="#" action>
      Reset Profile
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </ListGroupItem>
    <ListGroupItem tag="a" className="ripple" href="#" action>
      Delete Profile
      <span className="float-right">
        <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
      </span>
    </ListGroupItem>
  </ListGroup>
);
