import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
  
  render() {
    return (
        <Jumbotron>
        <div>
            <div className="row row-header">
                <div className="col-12">
                    <h1 className="headingText">{this.props.Header.Name}</h1>
                    <i className="fa fa-mobile fa-lg"></i> : {this.props.Header.Mobile} <br />
                    <i className="fa fa-envelope fa-xs"></i> : <a href={"mailto:" + this.props.Header.Email}>{this.props.Header.Email}</a> <br />
                    <i className="fa fa-linkedin fa-xs"></i> : <a href={this.props.Header.LinkedinURL}>{this.props.Header.LinkedinURL}</a> <br />
                </div>
            </div>
        </div>
        </Jumbotron>
    );
  }
}

export default Header;