import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Hobbies extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.Hobbies = values.Hobbies;
    this.props.saveResume(this.props.resume);

  }

  render() {
    return (
      <>
      <div className="container">
        <Card>
          <CardHeader className="bg-primary text-white">
            Hobbies
          </CardHeader>
          <CardBody>
            <LocalForm model="resumeHobbies" onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                  <Label htmlFor="Hobbies" md={2}>Hobbies</Label>
                  <Col md={10}>
                      <Control.textarea rows="3" model=".Hobbies" id="Hobbies" name="Hobbies"
                          placeholder="Hobbies"
                          className="form-control"
                          validators={{
                          }}
                          defaultValue = {this.props.resume.Hobbies}
                            />
                      <Errors
                          className="text-danger"
                          model=".Hobbies"
                          show="touched"
                          messages={{
                          }}
                        />
                  </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:2}}>
                    <Link to="/Education">
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
                      <Link to="/Preview">
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

export default Hobbies;