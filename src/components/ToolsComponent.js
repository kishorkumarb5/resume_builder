import React, { Component } from 'react';

class Tool extends Component {
  
  render() {
    return (
        <div>
            <div className="row row-header">
                <h4 className="headingText"><b className="fa fa-wrench fa-lg"></b> Tools</h4>
                <ul className="row row-content ml-3 list-unstyled">
                    {
                        this.props.Tools.map((Tool, index) => {
                            return (
                                <li key={"Tool"+index} className="col-12">
                                    <div className="row">
                                        <b className = "col-6">{Tool.type}</b>
                                        <b className = "col-6">:</b>
                                            
                                        <div className="col-12">
                                            {Tool.item}
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default Tool;