import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class PersonalInfo extends Component {
  
  render() {
    return (
        <div className="container-fluid">
          {displayHeader("fa-address-book", "Personal Information")}
          <div className={ROW_CONTENT}>
            <b className="col-12">DOB</b>
            <div className="col-12">{this.props.PersonalInfo.DOB}</div>
          </div>
          <div className={ROW_CONTENT}>
            <b className="col-12">Languages</b>
            <div className="col-12">{this.props.PersonalInfo.Languages}</div>
          </div>
          <div className="row row-header"></div>
        </div>
    );
  }
}

export default PersonalInfo;