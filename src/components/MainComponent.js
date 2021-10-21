import React, { Component } from 'react';
import ResumePrintView from './Template_1/ResumePrintViewComponent'
import ResumeEditor from './Resume_Editor/ResumeEditorComponent'
import { RESUME_DATA } from '../data/resume_data';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class Main extends Component {
  
  render() {
    return (
      <div>

        <div className="containerfluid d-print-none">
          {/* <Header />
          <Route exact path='/editor' component={() => <ResumeEditor resume={this.props.resume} />} /> */}
        </div>
        <div>
          <ResumePrintView resume={RESUME_DATA} />
        </div>
      </div>
    );
  }
}

export default Main;