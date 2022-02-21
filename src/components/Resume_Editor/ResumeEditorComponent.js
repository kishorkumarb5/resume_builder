import React, { Component } from 'react';

<<<<<<< HEAD
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup } from 'react-transition-group';
import { BrowserRouter } from 'react-router-dom';

import ResumeEditorNavBar from './ResumeEditorNavBarComponent';
import Header from './HeaderComponent';
import Profile from './ProfileComponent';
import PersonalInfo from './PersonalInfoComponent';
import ProgrammingLanguages from './ProgrammingLanguagesComponent';
import AreasOfExpertise from './AreasOfExpertiseComponent';
import Tool from './ToolsComponent';
import EmploymentHistory from './EmploymentHistoryComponent';
import Education from './EducationComponent';
import Hobbies from './HobbiesComponent';

class ResumeEditor extends Component {
  
    constructor(props) {
        super(props);
    }

    render() {
    return (            
        <div className="container-fluid">
            <BrowserRouter>
                <div className="row align-items-start">
                    <ResumeEditorNavBar />
                    <div className="col-12">
                    <TransitionGroup>
                        <Switch location={this.props.location}>
                            <Route exact path='/Header' component={() => <Header resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/Profile' component={() => <Profile resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/PersonalInfo' component={() => <PersonalInfo resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/ProgrammingLanguages' component={() => <ProgrammingLanguages resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/AreasOfExpertise' component={() => <AreasOfExpertise resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/Tools' component={() => <Tool resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/EmploymentHistory' component={() => <EmploymentHistory resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/Education' component={() => <Education resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Route exact path='/Hobbies' component={() => <Hobbies resume={this.props.resume} saveResume={this.props.saveResume} />} />
                            <Redirect to="/Header" />
                            {/* <ResumePrintView resume={RESUME_DATA} /> */}
                        </Switch>
                    </TransitionGroup>
                    </div>
                </div>
            <div className="container-fluid">
            </div>
        </BrowserRouter>
    </div>
=======
class ResumeEditor extends Component {
  
    render() {
    return (
            
            <div className="container-fluid ml-0 mt-5 mr-0 mb-0">
                <div className="row ml-0 mt-0 mr-0 mb-0">
                    <div className="col-12 ml-0">
                      Resume Editor
                    </div>
                </div>
            </div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
    );
    }
}

<<<<<<< HEAD
export default ResumeEditor;
=======
export default ResumeEditor;
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
