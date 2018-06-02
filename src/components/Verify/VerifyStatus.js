import React from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Container, Table, Alert } from "reactstrap";
import MaterialIcon from "material-icons-react";
import { connect } from "react-redux";

class VerifyStatusConfirmation extends React.Component {
  render() {
    const { alert, success, response, failed, error } = this.props;
    return (
      <Container>
        {success ? (
          <Row className="mt-5" id="notfound">
            <Col className="text-center">
              <p>
                <MaterialIcon icon="done_all" size="90" color="green" />
              </p>
              <h4 className="text-success">{alert.message}</h4>{" "}
              <div>
                <p>
                  <strong>Transaction ID:</strong> {response.transactionId}
                </p>
                {/* <p>
                  <strong>Reference ID:</strong> {response.referenceId}
                </p> */}
                {/* <Table>
                  <tbody>
                    <tr>
                      <th scope="row">Profile ID</th>
                      <td>{response.profileId}</td>
                    </tr>
                    <tr>
                      <th scope="row">First Name</th>
                      <td>{response.firstName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Last Name</th>
                      <td>{response.lastName}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone Number</th>
                      <td>{response.phoneNumber}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{response.email}</td>
                    </tr>
                  </tbody>
                </Table> */}
              </div>
            </Col>
          </Row>
        ) : failed ? (
          <Row className="mt-5" id="notfound">
            <Col className="text-center">
              <p>
                <MaterialIcon icon="error" size="90" color="red" />
              </p>
              <h4 className="text-danger">Verification Error</h4>{" "}
              <Alert className='alert-danger'>{error.message}</Alert>
            </Col>
          </Row>
        ) : (
          <Alert className="alert-danger">
            No Transaction Found<Redirect to="/" />{" "}
          </Alert>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const {
    submitting,
    success,
    failed,
    response,
    error
  } = state.verifyTransaction;
  const { alert } = state;

  return {
    alert,
    submitting,
    success,
    failed,
    response,
    error
  };
};
const VerifyStatus = connect(mapStateToProps)(VerifyStatusConfirmation);

export { VerifyStatus };
