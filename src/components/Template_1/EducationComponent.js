import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

function RenderEducation({EducationItem}) {
    let fontStyle = {fontSize: "100%"}

    return (
        <div>
            <div className={ROW_CONTENT}>
<<<<<<< HEAD
                <div className="col-4 headingText-template1" style={fontStyle}>
=======
                <div className="col-4 headingText" style={fontStyle}>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                    {EducationItem.From} - {EducationItem.To} <br />
                </div>
                <div className="col-8 text-right">
                    <b><i>{EducationItem.Degree} ({EducationItem.Grade}%)</i></b> <br />
                    at <b>{EducationItem.CollegeName} | {EducationItem.University}</b> <br />
                </div>
            </div>
<<<<<<< HEAD
            <div className="row row-header-template1"></div>
=======
            <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
        </div>
        );
}


class Education extends Component {
  
  render() {
    return (
        <div className="container-fluid">
            {displayHeader("fa-graduation-cap", "Education")}
            <div className="list-unstyled">
                {
                    this.props.Education.map((EducationItem) => {
                        return (
                            <li key={EducationItem.From}>
                                <RenderEducation EducationItem={EducationItem} />
                            </li>
                        );
                    })
                }
            </div>
<<<<<<< HEAD
            <div className="row row-header-template1"></div>
=======
            <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
        </div>
    );
  }
}

export default Education;