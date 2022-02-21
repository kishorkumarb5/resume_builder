import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

function RenderEmploymentHistory({EmploymentHistory}) {
    let fontStyle = {fontSize: "100%"}
    return (
        <div>
            <div className={ROW_CONTENT}>
<<<<<<< HEAD
                <div className="col-4 headingText-template1" style={fontStyle}>
=======
                <div className="col-4 headingText" style={fontStyle}>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                    {EmploymentHistory.From} - <br /> {EmploymentHistory.To}
                </div>
                <div className="col-8 text-right">
                    <b>{EmploymentHistory.Company}</b> <br />
                    <b><i>{EmploymentHistory.Designation}</i></b>
                </div>
<<<<<<< HEAD
                <ul className="ml-0">
=======
                <ul className="ml-3">
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                    {EmploymentHistory.Description.map((Desc, index) => {
                        return (
                        <li key={index}>{Desc}</li>
                        );
                    })}
                </ul>
            </div>
<<<<<<< HEAD
            <div className="row row-header-template1"></div>
=======
            <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
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