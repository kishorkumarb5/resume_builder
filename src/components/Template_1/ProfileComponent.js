import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class Profile extends Component {
  
  render() {
    return (
      <div className="container-fluid">
      {displayHeader("fa-user ml-2", "Profile")}
              <div className={ROW_CONTENT}>
                  <div className="col">{this.props.Profile}</div>
              </div>
            <div className="row row-header-template1"></div>
        </div>
    );
  }
}

export default Profile;