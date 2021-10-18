import React, { Component } from 'react';

class AreasOfExpertise extends Component {
  
  render() {
    return (
        <div>
            <div className="row row-header">
                <h4 className="headingText"><b className="fa fa-pencil fa-lg"></b>  Areas Of Expertise</h4>
                <ul className="row row-content ml-3 list-unstyled">
                    <div  className="row ml-1">
                    {
                        this.props.AreasOfExpertise.map((AreasOfExpertise, index) => {
                            return (
                                <li key={"AreasOfExp"+index} className="col-12">
                                    {AreasOfExpertise.item}
                                </li>
                            );
                        })
                    }
                    </div>
                </ul>
            </div>
            <div className="row row-header"></div>
        </div>
    );
  }
}

export default AreasOfExpertise;