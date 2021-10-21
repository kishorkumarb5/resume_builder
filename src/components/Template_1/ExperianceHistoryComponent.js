import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

function RenderEmploymentHistory({EmploymentHistory}) {
    let fontStyle = {fontSize: "100%"}
    return (
        <div>
            <div className={ROW_CONTENT}>
                <div className="col-4 headingText" style={fontStyle}>
                    {EmploymentHistory.From} - <br /> {EmploymentHistory.To}
                </div>
                <div className="col-8 text-right">
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
    <div className="container-fluid">
        {displayHeader("fa-briefcase", "Employment History")}
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
    );
  }
}

export default ExperianceHistory;