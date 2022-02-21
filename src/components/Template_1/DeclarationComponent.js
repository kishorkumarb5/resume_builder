import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class Declaration extends Component {
  
  render() {
    return (
      <div className="container-fluid">
        {displayHeader("ml-2", "Declaration")}
        <div className={ROW_CONTENT}>
          <div className="ml-2">
            {this.props.Declaration}
          </div>
        </div>
            <div className="row row-header-template1"></div>
        </div>
    );
  }
}

export default Declaration;