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
<<<<<<< HEAD:src/components/Template_1/ResumePrintViewComponent.js
import Declaration from './DeclarationComponent';
=======
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8:src/components/ResumePrintViewComponent.js

class ResumePrintView extends Component {
  
    render() {
    return (
<<<<<<< HEAD:src/components/Template_1/ResumePrintViewComponent.js
            <div className="container-fluid ml-0 mt-0 mr-0 mb-0 d-print-flex">
=======
            
            <div className="container-fluid ml-0 mt-5 mr-0 mb-0 d-print-flex">
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8:src/components/ResumePrintViewComponent.js
                <div className="row ml-0 mt-0 mr-0 mb-0">
                    <div className="col-12 ml-0">
                        <Header Header={this.props.resume.Header} />
                    </div>
                    <div className="col-7 ml-0 mt-0 mr-0 mb-0">
                        <Profile Profile={this.props.resume.Profile} />
                        <ExperianceHistory EmploymentHistory={this.props.resume.EmploymentHistory} />
                        <Education Education={this.props.resume.Education} />
                        {/* <Declaration Declaration={this.props.resume.Declaration} /> */}
                    </div>
                    <div className="col-5 zeroMargin">
                        <ProgrammingLanguage ProgrammingLanguages={this.props.resume.ProgrammingLanguages} />
                        <AreasOfExpertise AreasOfExpertise={this.props.resume.AreasOfExpertise} />
                        <Tool Tools={this.props.resume.Tools} />
                        <Hobbies Hobbies={this.props.resume.Hobbies} />
                        <PersonalInfo PersonalInfo={this.props.resume.PersonalInfo} />
                    </div>
                    <div className="col-12 zeroMargin">
                        <Declaration Declaration={this.props.resume.Declaration} />
                    </div>
                </div>
            </div>
    );
    }
}

export default ResumePrintView;