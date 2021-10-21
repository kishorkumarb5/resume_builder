import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class Tool extends Component {
  
  render() {
    return (
        <div className="container-fluid">
            {displayHeader("fa-wrench", "Tools")}
            <ul className={ROW_CONTENT + " list-unstyled"}>
                {
                    this.props.Tools.map((Tool, index) => {
                        return (
                            <li key={"Tool"+index} className="col-12">
                                <div className="row">
                                    <b className = "col-12"><span className={"fa " + Tool.icon + " fa-sm"}></span> {Tool.type} </b>
                                        
                                    <div className="col-12 mb-3">
                                        {Tool.item}
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default Tool;