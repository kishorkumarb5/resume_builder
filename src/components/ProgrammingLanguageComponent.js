import React, { Component } from 'react';
import { Button } from 'reactstrap';

class ProgrammingLanguage extends Component {
  
  render() {
    return (
        <div>
            <div className="row row-header">
                <h4 className="headingText"><b className="fa fa-code fa-lg"></b> Programming Languages</h4>
                <ul className="row row-content ml-3 list-unstyled">
                    <div  className="row ml-1">
                    {
                        this.props.ProgrammingLanguages.map((ProgLang, index) => {
                            return (
                                <li key={"ProgLang"+index}>
                                    <label htmlFor={"ProgLang"+index} className="col-12 ml-3 zeroPaddingZeroMargin">{ProgLang.item}</label>
                                    <div className="btn-group ml-3 zeroPaddingZeroMargin">
                                    {
                                        [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                                            if (item <= (ProgLang.rating/10)) {
                                                return (
                                                    <Button key={"Btn"+index} className="btn btn-sm rangeSlideLeft zeroMargin mb-2"></Button>
                                                );
                                            }
                                            else {
                                                return (
                                                    <Button key={"Btn"+index} className="btn btn-sm rangeSlideRight zeroMargin mb-2"></Button>
                                                );
                                            }
                                        })
                                    }
                                    </div>
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

export default ProgrammingLanguage;