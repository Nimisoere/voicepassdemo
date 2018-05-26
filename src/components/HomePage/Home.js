import React from "react";
import { ListGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { seoObject } from "../../_constants";
import { Seo } from "../_Shared";
import MaterialIcon from "material-icons-react";

export const HomePage = () => (
  <div>
    <Seo
      title={seoObject.home.title}
      description={seoObject.base.description}
      base={false}
    />
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
      <NavLink
        tag="a"
        className="ripple list-group-item-action list-group-item"
        to="/perform-transaction"
      >
        Perform Transaction
        <span className="float-right">
          <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
        </span>
      </NavLink>
      <NavLink
        tag="a"
        className="ripple list-group-item-action list-group-item"
        to="/verify-transaction"
      >
        Transaction Status
        <span className="float-right">
          <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
        </span>
      </NavLink>
      <NavLink
        tag="a"
        className="ripple list-group-item-action list-group-item"
        to="/reset-profile"
      >
        Reset Profile
        <span className="float-right">
          <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
        </span>
      </NavLink>
      <NavLink
        tag="a"
        className="ripple list-group-item-action list-group-item"
        to="/delete-profile"
      >
        Delete Profile
        <span className="float-right">
          <MaterialIcon icon="keyboard_arrow_right" color="#ccc" />
        </span>
      </NavLink>
    </ListGroup>
  </div>
);