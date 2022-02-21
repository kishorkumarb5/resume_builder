import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class AreasOfExpertise extends Component {
  
  render() {
    return (
        <div className="container-fluid">
            {displayHeader("fa-pencil", "Areas Of Expertise")}
            <ul className={ROW_CONTENT + " list-unstyled"}>
                <div  className="row ml-1">
                {
                    this.props.AreasOfExpertise.map((AreasOfExpertise, index) => {
                        return (
                            <li key={"AreasOfExp"+index} className="col-12 mb-1">
                                {AreasOfExpertise.item}
                            </li>
                        );
                    })
                }
                </div>
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

export default AreasOfExpertise;