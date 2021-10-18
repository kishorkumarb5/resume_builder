import React, { Component } from 'react';

class PersonalInfo extends Component {
  
  render() {
    return (
        <div>
            <div className="row row-header">
                <h4 className="headingText"><b className="fa fa-address-book fa-lg"></b> Personal Information</h4>                
              <div className="col-12">
                <div className="row row-content">
                  <b className="col-6">DOB</b>
                  <b className="col-6">:</b>
                  <div className="col-12">{this.props.PersonalInfo.DOB}</div>
                </div>
                <div className="row row-content">
                  <b className="col-6">Languages</b>
                  <b className="col-6">:</b>
                  <div className="col-12">{this.props.PersonalInfo.Languages}</div>
                </div>
                <div className="row row-content">
                  <b className="col-6">Address </b>
                  <b className="col-6">:</b>
                  <div className="col-12">{this.props.PersonalInfo.Address}</div>
                </div>
              </div>
            </div>
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default PersonalInfo;