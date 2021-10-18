import React, { Component } from 'react';

function RenderEducation({EducationItem}) {
    let fontStyle = {fontSize: "90%"}

    return (
        <div>
            <div className="row row-content ml-3">
                <div className="col-4 headingText" style={fontStyle}>
                    {EducationItem.From} - {EducationItem.To}
                </div>
                <div className="col text-right">
                    <b><i>{EducationItem.Degree}</i></b> <br />
                    <b>{EducationItem.CollegeName}</b> <br />
                </div>
            </div>
            <div className="row row-header"></div>
        </div>
        );
}


class Education extends Component {
  
  render() {
    return (
        <div>
            <div className="row row-header">
                <h4 className="headingText col-12"><b className="fa fa-graduation-cap fa-lg"></b> Education</h4>
                    <div className="list-unstyled col-12">
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
            </div>
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default Education;