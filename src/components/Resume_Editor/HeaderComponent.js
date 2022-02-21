import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { required, validEmail } from '../../common/commonValidations';
import { Link } from 'react-router-dom';

class Header extends Component {
  
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.Header = values.Header;
    this.props.saveResume(this.props.resume);
  }

  render() {
    return (
      <>
      <div className="container">
        <Card>
          <CardHeader className="bg-primary text-white">
            Header
          </CardHeader>
          <CardBody>
            <LocalForm model="resumeHeader" onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                  <Label htmlFor="Name" md={2}>Name</Label>
                  <Col md={10}>
                      <Control.text model=".Header.Name" id="Name" name="Name"
                          placeholder="Name"
                          className="form-control"
                          validators={{
                              required
                          }}
                          defaultValue={this.props.resume.Header.Name}
                            />
                      <Errors
                          className="text-danger"
                          model=".Header.Name"
                          show="touched"
                          messages={{
                              required: ' - Required'
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="Mobile" md={2}>Mobile</Label>
                  <Col md={10}>
                      <Control.text model=".Header.Mobile" id="Mobile" name="Mobile"
                          placeholder="Mobile"
                          className="form-control"
                          defaultValue={this.props.resume.Header.Mobile}
                          />
                      <Errors
                          className="text-danger"
                          model=".Mobile"
                          show="touched"
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="Email" md={2}>Email</Label>
                  <Col md={10}>
                      <Control.text model=".Header.Email" id="Email" name="Email"
                          placeholder="Email"
                          className="form-control"
                          validators={{
                            required: required, validEmail: validEmail
                          }}
                          defaultValue={this.props.resume.Header.Email}
                          />
                      <Errors
                          className="text-danger"
                          model=".Header.Email"
                          show="touched"
                          messages={{
                              required: ' - Required',
                              validEmail: ' - Invalid Email Address'
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="LinkedinURL" md={2}>Linked in URL</Label>
                  <Col md={10}>
                      <Control.text model=".Header.LinkedinURL" id="LinkedinURL" name="LinkedinURL"
                          placeholder="LinkedinURL"
                          className="form-control"
                          defaultValue={this.props.resume.Header.LinkedinURL}
                          />
                      <Errors
                          className="text-danger"
                          model=".LinkedinURL"
                          show="touched"
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                  <Label htmlFor="Address" md={2}>Address</Label>
                  <Col md={10}>
                      <Control.text model=".Header.Address" id="Address" name="Address"
                          placeholder="Address"
                          className="form-control"
                          defaultValue={this.props.resume.Header.Address}
                          />
                      <Errors
                          className="text-danger"
                          model=".Address"
                          show="touched"
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:2}}>
                      <Button className="btn-block" color="primary" disabled>
                      Prev
                      </Button>
                  </Col>
                  <Col md={{size:4, offset: 2}}>
                      <Button className="btn-block" type="submit" color="primary">
                      Save
                      </Button>
                  </Col>
                  <Col md={{size:2, offset: 2}}>
                      <Link to="/Profile">
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

export default Header;