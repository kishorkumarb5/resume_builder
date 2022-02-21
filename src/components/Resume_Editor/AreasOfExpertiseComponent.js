import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class AreasOfExpertise extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.AreasOfExpertise = values.AreasOfExpertise;
    this.props.saveResume(this.props.resume);

  }

  render() {
    return (
      <>
      <div className="container">
        <Card>
          <CardHeader className="bg-primary text-white">
            AreasOfExpertise
          </CardHeader>
          <CardBody>
            <LocalForm model="resumeAreasOfExpertise" onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                  <Label htmlFor="AreasOfExpertise" md={2}>First Name</Label>
                  <Col md={10}>
                      <Control.text model=".AreasOfExpertise" id="AreasOfExpertise" name="AreasOfExpertise"
                          placeholder="AreasOfExpertise"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.AreasOfExpertise}
                            />
                      <Errors
                          className="text-danger"
                          model=".AreasOfExpertise"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:2}}>
                    <Link to="/ProgrammingLanguages">
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
                      <Link to="/Tools">
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

export default AreasOfExpertise;