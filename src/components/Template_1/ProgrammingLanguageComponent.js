import React, { Component } from 'react';
import displayHeader, {ROW_CONTENT} from './CommonDisplayFunctions';

class ProgrammingLanguage extends Component {
  
  render() {
    return (
        <div className="container-fluid">
            {displayHeader("fa-code", "Programming Languages")}
            <ul className={ROW_CONTENT + " list-unstyled"}>
                <div>
                {
                    this.props.ProgrammingLanguages.map((ProgLang, index) => {
                        return (
                            <li key={"ProgLang"+index}>
                                <label htmlFor={"ProgLang"+index} className="col-12 ml-3 zeroPaddingZeroMargin">{ProgLang.item}</label>
                                <div className="row ml-3">
                                {
                                    [1,2,3,4,5,6,7,8,9,10].map((ratingBar, index) => {
                                        if (ratingBar <= (ProgLang.rating/10)) {
                                            return (
                                                // <Button key={"Btn"+index} className="btn btn-sm rangeSlideLeft zeroMargin mb-2"></Button>
                                                <div key={"Btn"+index} className="col-1 rangeSlideLeft-template1 mb-3"> </div>
                                            );
                                        }
                                        else {
                                            return (
                                                //<Button key={"Btn"+index} className="btn btn-sm rangeSlideRight zeroMargin mb-2"></Button>
                                                <div key={"Btn"+index} className="col-1 rangeSlideRight-template1 mb-3"> </div>
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
            <div className="row row-header-template1"></div>
        </div>
    );
  }
}

export default ProgrammingLanguage;