import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
 import axios from 'axios';
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isLoggedIn: false,
            name: ""
        };
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
    async handleLogin(event) {
        event.preventDefault();
        const $data = {
            username: this.username.value,
            password: this.password.value
        }
        this.toggleModal();
        const res = await axios.post('http://localhost:8000/api/login', $data);
        
        if (res.data.status === 200) {
            this.setState({
                isLoggedIn: !this.state.isLoggedIn,
                name: $data.username
            })
        }
        else {
            console.log("error");
        }

    }
    
     
    login(){
        console.log(this.state.name)
        console.log(this.state.isLoggedIn);
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return (
                  <Nav className="ml-auto" navbar>
                       <div className="badge bg-primary text-wrap text-white">
                        Hi,{this.state.name}
</div>
                    <NavItem>
                        <Button onClick={this.toggleModal} color="white" className="btn btn-primary"><span className="fa fa-sign-out fa-lg"></span>Logout</Button>
                    </NavItem>
                </Nav>);
        }
        else  {
            return (
             
                 <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={this.toggleModal} color="white" className="btn btn-primary"><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                    </NavItem>
                </Nav>);
        }
    }
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/e-learning.svg' height="30" width="41" alt='Job Portal' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/dashboard'><span className="fa fa-address-card fa-lg"></span>Dashboard</NavLink>
                                </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/contactus'><span className="fa fa-list fa-lg"></span>Contact Us</NavLink>
                            </NavItem>
                            
                        
                            </Nav>
                            {this.login()}
                        </Collapse>
                    </div>
                    
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
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
                        </Form>
                        
                    </ModalBody>
                </Modal>
                
            </div>
        );
    }
}


export default Header;