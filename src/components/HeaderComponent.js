import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
<<<<<<< HEAD
   Modal, ModalHeader, ModalBody,
   Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

import { NavLink } from 'react-router-dom';
import { required, validEmail } from '../common/commonValidations';
=======
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
<<<<<<< HEAD
        
        this.toggleModal = this.toggleModal.bind(this);
        this.loadResume = this.loadResume.bind(this);
=======

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
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

<<<<<<< HEAD
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
=======
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
<<<<<<< HEAD
                                    <Button className="text-primary border-primary btn-light" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Load Resume</Button>
=======
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
<<<<<<< HEAD
                <Jumbotron className="jumbotronMain text-primary d-none">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12">
                                <h1>Resume Builder</h1>
                                <p>Make a perfect resume in 2021 and get your dream job using the free resume builder</p>
=======
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
<<<<<<< HEAD
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
=======
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
>>>>>>> b6be2c81be0faac4d1c6df60389aebe66e62aae8
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;