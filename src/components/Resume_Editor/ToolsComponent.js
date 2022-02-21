import React, { Component } from 'react';
import { Button, Row, Col, Label,
    Card, CardBody, CardHeader } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import Skill from './SkillsComponent';

class Tool extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(values) {
    this.props.resume.Tool = values.Tool;
    this.props.saveResume(this.props.resume);

  }

  render() {
    return (
      <>
      <Skill
        skills={this.props.resume.Tools}
        SkillCategory="Tool"
        skillHeader="Tool"
        handleSave={this.handleSave}
      />
      </>
    );
  }
}

export default Tool;