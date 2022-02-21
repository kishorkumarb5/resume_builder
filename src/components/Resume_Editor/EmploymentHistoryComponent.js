import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class EmploymentHistory extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.EmploymentHistory = values.EmploymentHistory;
    this.props.saveResume(this.props.resume);

  }

  render() {
    return (
      <>
      <div className="container">
        <Card>
          <CardHeader className="bg-primary text-white">
            Employment History
          </CardHeader>
          <CardBody>
            <LocalForm model="resumeEmploymentHistory" onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                  <Label htmlFor="Company" md={2}>First Name</Label>
                  <Col md={10}>
                      <Control.text model=".EmploymentHistory.Company" id="Company" name="Company"
                          placeholder="Company"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.EmploymentHistory.Company}
                            />
                      <Errors
                          className="text-danger"
                          model=".EmploymentHistory.Company"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:2}}>
                    <Link to="/Tools">
                      <Button className="btn-block" color="primary">
                      Prev
                      </Button>
                    </Link>
                  </Col>
                  <Col md={{size:4, offset: 2}}>
                      <Button className="btn-block" type="submit" color="primary">
                      Save
                      </Button>
                  </Col>
                  <Col md={{size:2, offset: 2}}>
                      <Link to="/Education">
                        <Button className="btn-block" color="primary">
                        Next
                        </Button>
                      </Link>
                  </Col>
              </Row>
            </LocalForm>
          </CardBody>
        </Card>
      </div>
      </>
    );
  }
}

export default EmploymentHistory;