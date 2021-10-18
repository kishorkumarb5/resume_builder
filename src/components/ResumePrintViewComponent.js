import React, { Component } from 'react';
import Header from './HeaderComponent';
import ExperianceHistory from './ExperianceHistoryComponent';
import Education from './EducationComponent';
import AreasOfExpertise from './AreasOfExpertiseComponent';
import Tool from './ToolsComponent';
import ProgrammingLanguage from './ProgrammingLanguageComponent';
import Profile from './ProfileComponent';
import PersonalInfo from './PersonalInfoComponent';

class ResumePrintView extends Component {
  
    render() {
    return (
            
            <div className="container ml-0 mt-0 mr-0 mb-0">
                <div className="row ml-0 mt-0 mr-0 mb-0">
                    <div className="col-8 ml-0 mt-0 mr-0 mb-0">
                        <Header Header={this.props.resume.Header} />
                        <Profile Profile={this.props.resume.Profile} />
                        <ExperianceHistory EmploymentHistory={this.props.resume.EmploymentHistory} />
                        <Education Education={this.props.resume.Education} />
                    </div>
                    <div className="col-4 zeroMargin">
                        <ProgrammingLanguage ProgrammingLanguages={this.props.resume.ProgrammingLanguages} />
                        <AreasOfExpertise AreasOfExpertise={this.props.resume.AreasOfExpertise} />
                        <Tool Tools={this.props.resume.Tools} />
                        <PersonalInfo PersonalInfo={this.props.resume.PersonalInfo} />
                    </div>
                </div>
            </div>
    );
    }
}

export default ResumePrintView;