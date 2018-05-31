import React from "react";
import { Row, Col } from "reactstrap";

export const AccountDisplay = () => (
  <div className="account-display">
    <Row>
      <Col xs="6">
        {" "}
        <h4>
          <small>Balance</small>
          <br />
          N 500,000
        </h4>
      </Col>
      <Col xs="6" className='text-right'>
        {" "}
        <h4>
          <small>A/C: Current</small>
          <br />
          1234567890
        </h4>
      </Col>
    </Row>
  </div>
);
