import React from "react";

import { Seo } from "./Seo";
import { seoObject } from "../../_constants";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

export const NotFound = () => (
  <Container>
    <Row className="notfound-wrapper mt-5" id="notfound">
      <Seo
        title={seoObject.notfound.title}
        description={seoObject.notfound.description}
        base={false}
      />
      <Col>
        <div className="notfound text-center">
          <h3>404</h3>
          <p>Page not found</p>
          <Link to="/">Go back home</Link>
        </div>
      </Col>
    </Row>
  </Container>
);
