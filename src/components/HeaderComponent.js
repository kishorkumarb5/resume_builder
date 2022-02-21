import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
   Modal, ModalHeader, ModalBody,
   Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

import { NavLink } from 'react-router-dom';
import { required, validEmail } from '../common/commonValidations';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.loadResume = this.loadResume.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      loadResume(values) {
        this.toggleModal();
        this.props.fetchResume(values.email);

    }

    render() {
        return(
            <div className="container-fluid">
                <Navbar className="bg-primary bg-gradient" expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto text-white" href="/"><i className="fa fa-user-plus fa-lg"></i>Resume Builder</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link  text-white"  to='/editor'><span className="fa fa-pencil-square-o fa-lg"></span> Editor</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link  text-white" to='/Preview'><span className="fa fa-file-pdf-o fa-lg"></span> Preview</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link  text-white" to='/ScreenShotView'><span className="fa fa-camera-retro fa-lg"></span> ScreenShot View</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button className="text-primary border-primary btn-light" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Load Resume</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className="jumbotronMain text-primary d-none">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <h1>Resume Builder</h1>
                                <p>Make a perfect resume in 2021 and get your dream job using the free resume builder</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader className="bg-primary text-white" toggle={this.toggleModal}>Load Resume</ModalHeader>
                    <ModalBody>
                    <Form model="resume" onSubmit={(values) => this.loadResume(values)}>
                        <Row className="form-group">
                            <Col className="col-12 ml-2 text-primary">
                                <Label htmlFor="email"><b>Email</b></Label>
                            </Col>
                            <Col className="col-12">
                                <Control.text model=".email" id="email" name="email"
                                        placeholder="Enter your email id"
                                        className="form-control border-primary"
                                        validators={{
                                            required: required, validEmail: validEmail
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: ' - Required',
                                            validEmail: ' - Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Load</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;