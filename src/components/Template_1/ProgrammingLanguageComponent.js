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
<<<<<<< HEAD
                                    [1,2,3,4,5,6,7,8,9,10].map((ratingBar, index) => {
                                        if (ratingBar <= (ProgLang.rating/10)) {
                                            return (
                                                // <Button key={"Btn"+index} className="btn btn-sm rangeSlideLeft zeroMargin mb-2"></Button>
                                                <div key={"Btn"+index} className="col-1 rangeSlideLeft-template1 mb-3"> </div>
=======
                                    [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                                        if (item <= (ProgLang.rating/10)) {
                                            return (
                                                // <Button key={"Btn"+index} className="btn btn-sm rangeSlideLeft zeroMargin mb-2"></Button>
                                                <div key={"Btn"+index} className="col-1 rangeSlideLeft mb-3"> </div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                                            );
                                        }
                                        else {
                                            return (
                                                //<Button key={"Btn"+index} className="btn btn-sm rangeSlideRight zeroMargin mb-2"></Button>
<<<<<<< HEAD
                                                <div key={"Btn"+index} className="col-1 rangeSlideRight-template1 mb-3"> </div>
=======
                                                <div key={"Btn"+index} className="col-1 rangeSlideRight mb-3"> </div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
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
<<<<<<< HEAD
            <div className="row row-header-template1"></div>
=======
            <div className="row row-header"></div>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
        </div>
    );
  }
}

export default ProgrammingLanguage;