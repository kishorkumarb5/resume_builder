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
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default Hobbies;