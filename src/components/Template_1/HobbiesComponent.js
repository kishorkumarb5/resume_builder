import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class Hobbies extends Component {
  
  render() {
    return (
        <div className="container-fluid">
          {displayHeader("fa-list", "Interest and Activities")}
          <ul className={ROW_CONTENT + " list-unstyled"}>
              {
                  this.props.Hobbies.map((Hobby, index) => {
                      return (
                          <li key={"Tool"+index} className="col-12">{Hobby}</li>
                      );
                  })
              }
          </ul>
<<<<<<< HEAD
            <div className="row row-header-template1"></div>
=======
            <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
        </div>
    );
  }
}

export default Hobbies;