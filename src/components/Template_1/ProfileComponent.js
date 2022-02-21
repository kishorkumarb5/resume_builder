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
<<<<<<< HEAD
            <div className="row row-header-template1"></div>
=======
            <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
        </div>
    );
  }
}

export default Profile;