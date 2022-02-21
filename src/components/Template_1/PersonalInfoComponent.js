import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class PersonalInfo extends Component {
  
  render() {
    return (
        <div className="container-fluid">
          {displayHeader("fa-address-book", "Personal Information")}
<<<<<<< HEAD
          {/* <div className={ROW_CONTENT}>
=======
          <div className={ROW_CONTENT}>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
            <b className="col-12">DOB</b>
            <div className="col-12">{this.props.PersonalInfo.DOB}</div>
          </div>
          <div className={ROW_CONTENT}>
            <b className="col-12">Languages</b>
            <div className="col-12">{this.props.PersonalInfo.Languages}</div>
<<<<<<< HEAD
          </div> */}
          <div className={ROW_CONTENT}>
            <b className="col-3">DOB</b>
            <div className="col-9"><b>: </b>{this.props.PersonalInfo.DOB}</div>
          </div>
          <div className={ROW_CONTENT}>
            <b className="col-3">Languages</b>
            <div className="col-9"><b>: </b>{this.props.PersonalInfo.Languages}</div>
          </div>
          <div className="row row-header-template1"></div>
=======
          </div>
          <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
        </div>
    );
  }
}

export default PersonalInfo;