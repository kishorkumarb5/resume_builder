import React, { Component } from 'react';
import { Form } from 'react-redux-form';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
   Modal, ModalHeader, ModalBody,
   Button, Row, Col, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { COMPONENT_LIST } from './ComponentList';

class ResumeEditorNavBar extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
 
    render() {
    
    const DisplayNavItems = ({compList}) => {
        return(
            <>
                {
                compList.map((comp, index) => {
                    return (
                        <NavItem  className="nav-light" key={"compList"+index}>
                            <NavLink className="nav-link"  to={comp.link}><span className={"fa " + comp.icon + " fa-lg"}></span> {comp.name}</NavLink>
                        </NavItem>
                    );
                })
            }
            </>
        )
    }

    return (
            
            <div className="container-fluid">
            <Navbar light expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="nav-light" tabs>
                            <DisplayNavItems compList={COMPONENT_LIST} />
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            </div>
    );
    }
}

export default ResumeEditorNavBar;
