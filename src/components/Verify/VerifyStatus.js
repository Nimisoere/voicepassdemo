import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Spinner } from "../_Shared";
import MaterialIcon from "material-icons-react";

export const VerifyStatus = ({status}) => (
  <Container>
    <Row className="mt-5" id="notfound">
      <Col className="text-center">
      <p>
          <MaterialIcon icon="done_all" size="90" color="green" />
        </p>
        <h4 className="text-success">Verification Done</h4>{" "}
       
        <p>
          <MaterialIcon icon="record_voice_over" size="90" color="#eee" />
        </p>
      </Col>
    </Row>
  </Container>
);
