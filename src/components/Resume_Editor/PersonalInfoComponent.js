import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class PersonalInfo extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.PersonalInfo = values.PersonalInfo;
    this.props.saveResume(this.props.resume);

  }

  render() {
    return (
      <>
      <div className="container">
        <Card>
          <CardHeader className="bg-primary text-white">
            Personal Information
          </CardHeader>
          <CardBody>
            <LocalForm model="resumePersonalInfo" onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                  <Label htmlFor="DOB" md={2}>First Name</Label>
                  <Col md={10}>
                      <Control.text model=".PersonalInfo.DOB" id="DOB" name="DOB"
                          placeholder="DOB"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.PersonalInfo.DOB}
                            />
                      <Errors
                          className="text-danger"
                          model=".PersonalInfo.DOB"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="FatherName" md={2}>Father Name</Label>
                  <Col md={10}>
                      <Control.text model=".PersonalInfo.FatherName" id="FatherName" name="FatherName"
                          placeholder="FatherName"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.PersonalInfo.FatherName}
                            />
                      <Errors
                          className="text-danger"
                          model=".PersonalInfo.FatherName"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="Languages" md={2}>Languages</Label>
                  <Col md={10}>
                      <Control.text model=".PersonalInfo.Languages" id="Languages" name="Languages"
                          placeholder="Languages"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.PersonalInfo.Languages}
                            />
                      <Errors
                          className="text-danger"
                          model=".PersonalInfo.Languages"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:2}}>
                    <Link to="/Profile">
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
                      <Link to="/ProgrammingLanguages">
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

export default PersonalInfo;