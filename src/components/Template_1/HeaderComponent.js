import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import {ROW_HEADER} from './CommonDisplayFunctions';

class Header extends Component {
  
  render() {
    if (this.props.Header)
      return (
          <Jumbotron className="container-fluid ml-0 mr-0 mt-2 jumbotron-template1">
            <div className={ROW_HEADER + " align-middle"}>
                <div className="col-7">
                  <br />
                    <h3 className="headingText-template1">{this.props.Header.Name}</h3>
                  </div>
                  <div className="col-5">
                  <i className="fa fa-map-marker fa-lg"></i> : {this.props.Header.Address} <br />
                  <i className="fa fa-phone fa-lg"></i> : {this.props.Header.Mobile} <br />
                  <i className="fa fa-envelope fa-sm"></i> : <a href={"mailto:" + this.props.Header.Email}>{this.props.Header.Email}</a> <br />
                  <i className="fa fa-linkedin fa-sm"></i> : <a href={this.props.Header.LinkedinURL}>{this.props.Header.LinkedinURL}</a> <br />
                </div>
            </div>
          </Jumbotron>
      );
    else
        return(<></>);
  }
}

export default Header;