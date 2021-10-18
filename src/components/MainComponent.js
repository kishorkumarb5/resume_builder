import React, { Component } from 'react';
import ResumePrintView from './ResumePrintViewComponent'
import { RESUME_DATA } from '../data/resume_data';

class Main extends Component {
  
  render() {
    return (
      <ResumePrintView resume={RESUME_DATA} />
    );
  }
}

export default Main;