import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader, Modal } from 'reactstrap';
import { Control, LocalForm, Errors, RangeSlider } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Skill extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isModalOpen: false,
      displayRating: false,
      displayType: false,
      skillEditIndex: 0,
      editSkill: {
        item: "New Skill",
        rating: 100,
        type: "",
      }
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSkillEdit = this.handleSkillEdit.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
  }

  handleSave(values) {
    // this.props.resume.Skill = values.Skill;
    // this.props.saveResume(this.props.resume);
  }

  toggleEditModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSkillEdit(skill, index) {
    
    this.setState({
      skillEditIndex: index,
      editSkill: skill
    });
    this.toggleEditModal();
  }

  handleAddSkill() {

    this.props.skills.push({
      item: "New Skill",
      rating: 100,
      type: "",
    });
    var newIndex = this.props.skills.length - 1;
    this.handleSkillEdit(this.props.skill[newIndex], newIndex);
  }
  
  render() {
  
    const onChangeDisplayRating = (value) => {
      this.setState({
        displayRating: !this.state.displayRating
      })
    }

    const onChangeDisplayType = (value) => {
      this.setState({
        displayType: !this.state.displayType
      })
    }

  const RenderSkill = ({skill, index}) => {
    if(skill)
      return(
      
        <>
        <Row className="form-group">
          <Col md={8} hidden={!this.state.displayType}>
          <i className={"fa " + skill.icon + " fa-sm col-2"}></i> <Control.text font-weight="bold" className="col-4 mt-0" model={"["+index+"].icon"} id={"icon"+index}
             name={"icon"+index} placeholder="Group Icon" className="form-control border-0" defaultValue={skill.icon} />             
            </Col>
        </Row>
        <Row className="form-group">            
          <Col md={8} hidden={!this.state.displayType}>
             <b><Control.text className="col-4 mt-0" model={"["+index+"].type"} id={"type"+index}
              name={"type"+index} placeholder="Group Name" className="form-control border-0 text-bold" defaultValue={skill.type} /></b>
            </Col>
        </Row>
        <Row className="form-group">
          <Col md={12}>
            <Control.text className="col-11 mb-3" model={"["+index+"].item"} id={"item"+index}
             name={"item"+index} placeholder="Group Name" className="form-control border-0" defaultValue={skill.item} />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={3} hidden={!this.state.displayRating}>
            <Control.text className="col-11 mb-3" model={"["+index+"].rating"} id={"rating"+index}
            name={"rating"+index} placeholder="Group Name" className="form-control border-0" defaultValue={skill.rating} />
          </Col>
        </Row>
        </>
        );
    else
      return(<></>);
  }

    return(<>
      <div className="container">
        <div>skills</div>
        <Card>
          <CardHeader>
            {this.props.skillHeader}
          </CardHeader>
          <CardBody>
            <LocalForm model={"resume"+this.props.SkillCategory} onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                <Col md={{size: 6, offset: 2}}>
                    <div className="form-check">
                        <Label check>
                            <Control.checkbox model=".displayType" name="agree"
                                className="form-check-input"
                                onChange={(value) => onChangeDisplayType(value)}
                                  /> {' '}
                                <strong>Display Type</strong>
                        </Label>
                    </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size: 6, offset: 2}}>
                    <div className="form-check">
                        <Label check>
                            <Control.checkbox model=".displayRating" name="agree"
                                className="form-check-input"
                                onChange={(value) => onChangeDisplayRating(value)}
                                /> {' '}
                                <strong>Display Rating</strong>
                        </Label>
                    </div>
                </Col>
              </Row>
              {
                this.props.skills.map((skill, index) => {
                  return(
                    <div key={this.props.SkillCategory+index} className="col-12">
                     <RenderSkill skill={skill} index={index} />
                    </div>
                  );
                })
              }
              <Row className="form-group ml-3 mt-3">
                <Button color="primary" className="text-white" onClick={this.handleAddSkill}><i className="fa fa-plus fa-lg"></i></Button>
              </Row>
              <Row className="form-group">
                <Col md={{size:4, offset: 4}}>
                    <Button className="btn-block" type="submit" color="primary">
                    Save
                    </Button>
                </Col>
              </Row>
            </LocalForm>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleEditModal}>
          <Card className="mt-1 ml-1 mb-1">
          <CardHeader color="primary">Add/edit New {this.props.SkillCategory}</CardHeader>
          <CardBody>
            <LocalForm model={"resume"+this.props.SkillCategory+"["+this.state.skillEditIndex+"]"} onSubmit={(values) => this.handleSave(values)}>
              <Row className="form-group">
                <Label htmlFor="skillItem" md={{size:1, offset: 1}}>Skill</Label>
                <Col md={10}>
                  <Control.text model={".item["+this.state.skillEditIndex+"].item"} id="skillItem" name="skillItem"
                      placeholder="skill"
                      defaultValue={this.state.editSkill.item}
                      className="form-control"
                    />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="skillType" md={2}>Type</Label>
                <Col>
                    <Control.text model={".item["+this.state.skillEditIndex+"].type"} id="skillType" name="skillType"
                      placeholder=""
                      defaultValue={this.state.editSkill.type}
                      className="form-control"
                    />
                </Col>
                <Label htmlFor="skillIcon" md={2}>Choose icon</Label>
                <Col>
                    <Control.text model={".item["+this.state.skillEditIndex+"].icon"} id="skillIcon" name="skillIcon"
                      placeholder=""
                      defaultValue={this.state.editSkill.icon}
                      className="form-control"
                    />
                </Col>
                <Label htmlFor="skillRating" md={2}>Rating</Label>
                <Col>
                    <Control.text model={".item["+this.state.skillEditIndex+"].rating"} id="skillRating" name="skillRating"
                      placeholder=""
                      defaultValue={this.state.editSkill.rating}
                      className="form-control"
                    />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size:4, offset: 2}}>
                    <Button className="btn-block" type="submit" color="primary">
                    Save
                    </Button>
                </Col>
              </Row>
            </LocalForm>
          </CardBody>
          </Card>
        </Modal>
      </div>
    </>);
  }
}

export default Skill;