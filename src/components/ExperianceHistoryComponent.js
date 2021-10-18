import React, { Component } from 'react';

function RenderEmploymentHistory({EmploymentHistory}) {
    let fontStyle = {fontSize: "90%"}
    return (
        <div>
            <div className="row row-content ml-3">
                <div className="col-3 headingText" style={fontStyle}>
                    {EmploymentHistory.From} - {EmploymentHistory.To}
                </div>
                <div className="col-9 text-right">
                    <b>{EmploymentHistory.Company}</b> <br />
                    <b><i>{EmploymentHistory.Designation}</i></b>
                </div>
                <ul className="ml-3">
                    {EmploymentHistory.Description.map((Desc, index) => {
                        return (
                        <li key={index}>{Desc}</li>
                        );
                    })}
                </ul>
            </div>
            <div className="row row-header"></div>
        </div>
        );
}

class ExperianceHistory extends Component {
  
  render() {
    return (
    <div>
        <div className="row row-header">
            <div className="col-12">
                <h2 className="headingText"><i className="fa fa-briefcase"></i> Employment History</h2>
                <div className="list-unstyled">
                    {
                        this.props.EmploymentHistory.map((EmpHist) => {
                            return (
                                <li key={EmpHist.From}>
                                    <RenderEmploymentHistory EmploymentHistory={EmpHist} />
                                </li>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default ExperianceHistory;