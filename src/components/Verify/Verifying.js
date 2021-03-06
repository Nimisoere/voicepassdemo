import React from "react";
import { Row, Col, Container, Alert } from "reactstrap";
import { Spinner } from "../_Shared";
import MaterialIcon from "material-icons-react";

class Verifying extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.VerifyTransaction(this.props.response.transactionId);
    }, 40000);
  }
  render() {
    const { response } = this.props;
    return (
      <Container>
        <Row className="mt-5" id="notfound">
          <Col className="text-center">
            <Spinner size="80px" />
            <h4 className="text-success">Transaction submitted</h4>{" "}
            <p>
              <strong>Transaction ID</strong>: {response.transactionId}
            </p>
            <p>
              <MaterialIcon icon="record_voice_over" size="90" color="#eee" />
            </p>
            <p>Please allow a few seconds for verification</p>
            <Alert className='alert-info'>Kindly answer your phone and follow the voice prompt</Alert>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Verifying;
