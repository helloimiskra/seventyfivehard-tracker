import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'


export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">75 HARD DAILY TRACKER</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="mr-auto">
                <Nav.Link href="http://localhost:3001/users">Current Challengers</Nav.Link>
                <Nav.Link href="http://localhost:3001/users/new">New User</Nav.Link>
              </Nav>
            </Navbar>
        )
    }
}
