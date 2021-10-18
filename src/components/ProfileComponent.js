import React, { Component } from 'react';

class Profile extends Component {
  
  render() {
    return (
        <div>
            <div className="row row-header">
                <div className="col-12">
                    <h4 className="headingText"><b className="fa fa-user fa-lg ml-2"></b> Profile</h4>
                    <div className="row row-content ml-3">
                        <div className="col">{this.props.Profile}</div>
                    </div>
                </div>
            </div>
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default Profile;