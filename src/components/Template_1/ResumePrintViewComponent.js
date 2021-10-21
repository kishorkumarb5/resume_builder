import './Template1.css';

import React, { Component } from 'react';
import Header from './HeaderComponent';
import ExperianceHistory from './ExperianceHistoryComponent';
import Education from './EducationComponent';
import AreasOfExpertise from './AreasOfExpertiseComponent';
import Tool from './ToolsComponent';
import ProgrammingLanguage from './ProgrammingLanguageComponent';
import Profile from './ProfileComponent';
import PersonalInfo from './PersonalInfoComponent';
import Hobbies from './HobbiesComponent';

class ResumePrintView extends Component {
  
    render() {
    return (
            
            <div className="container-fluid ml-0 mt-5 mr-0 mb-0 d-print-flex">
                <div className="row ml-0 mt-0 mr-0 mb-0">
                    <div className="col-12 ml-0">
                        <Header Header={this.props.resume.Header} />
                    </div>
                    <div className="col-7 ml-0 mt-0 mr-0 mb-0">
                        <Profile Profile={this.props.resume.Profile} />
                        <ExperianceHistory EmploymentHistory={this.props.resume.EmploymentHistory} />
                        <Education Education={this.props.resume.Education} />
                    </div>
                    <div className="col-5 zeroMargin">
                        <ProgrammingLanguage ProgrammingLanguages={this.props.resume.ProgrammingLanguages} />
                        <AreasOfExpertise AreasOfExpertise={this.props.resume.AreasOfExpertise} />
                        <Tool Tools={this.props.resume.Tools} />
                        <Hobbies Hobbies={this.props.resume.Hobbies} />
                        <PersonalInfo PersonalInfo={this.props.resume.PersonalInfo} />
                    </div>
                </div>
            </div>
    );
    }
}

export default ResumePrintView;