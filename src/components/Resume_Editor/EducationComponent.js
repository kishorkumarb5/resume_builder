import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Education extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.Education = values.Education;
    this.props.saveResume(this.props.resume);

  }

  render() {
    return (
      <>
      <div className="container">
        <Card>
          <CardHeader className="bg-primary text-white">
            Education
          </CardHeader>
          <CardBody>
            <LocalForm model="resumeEducation" onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                  <Label htmlFor="Education" md={2}>First Name</Label>
                  <Col md={10}>
                      <Control.text model=".Education" id="Education" name="Education"
                          placeholder="Education"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.Education}
                            />
                      <Errors
                          className="text-danger"
                          model=".Education"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:2}}>
                    <Link to="/EmploymentHistory">
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
                      <Link to="/Hobbies">
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

export default Education;