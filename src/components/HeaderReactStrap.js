import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LogoSmall from '../img/bootstrap_kecil.svg';
import {
  CardImg,
  Card,
  CardTitle,
  CardText,
  Jumbotron,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
export default function HeaderReactStrap() {
  return (
    <div>
      <Container>
        <Row className='MyRow1Strap'>
          <Col className='col-lg-12'>
            <Navbar>
              <CardImg
                src={LogoSmall}
                style={{ width: '28px' }}
                alt='Card cap'
              />
              <Nav style={{ color: 'white' }} className='d-flex flex-row'>
                <NavItem>
                  <NavLink style={{ color: 'white' }} href='/components/'>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{ color: 'white' }} href='/components/'>
                    GettingStarted
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    style={{ color: 'white' }}
                    href='https://github.com/reactstrap/reactstrap'
                  >
                    Components
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    style={{
                      border: '1px solid grey',
                      marginLeft: '230px',
                      color: 'white'
                    }}
                    nav
                    caret
                  >
                    v1.0.0-Beta.16 (BootStrap 4.3)
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <div style={{ marginLeft: '8px' }} className='FontAwe1'>
                <i class='fab fa-github fa-2x'></i>
              </div>
              <div style={{ marginRight: '33px' }} className='FontAwe2'>
                <i className='FontAwe2' class='fab fa-discord fa-2x'></i>
              </div>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col
            className='col-lg-3'
            style={{ backgroundColor: '#282C35' }}
          ></Col>
          <Col className='col-lg-6' style={{ backgroundColor: '#282C35' }}>
            <Jumbotron
              fluid
              className='MyJumbotron'
              style={{ padding: '10px', backgroundColor: '#282C35' }}
            >
              <Row>
                <h1
                  style={{
                    fontWeight: '700',
                    fontSize: '3.2rem',
                    color: '#61dafb',
                    margin: '2rem 0'
                  }}
                >
                  React Bootstrap
                </h1>
              </Row>

              <p
                style={{
                  fontSize: '1.6rem',
                  color: '#fff',
                  lineHeight: '2'
                }}
              >
                <span>The most popular front-end framework</span> <br></br>
                <span style={{ color: 'grey' }}>Rebuilt </span>
                <span>for React.</span>
              </p>
              <Button
                style={{
                  width: '200px',
                  color: '#61dafb',
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                  borderRadius: '0.3rem',
                  marginRight: '8px',
                  border: '1px solid #61dafb'
                }}
                variant='outline-primary'
              >
                Get Started
              </Button>
              <Button
                style={{
                  width: '200px',
                  color: '#fff',
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                  borderRadius: '0.3rem',
                  marginRight: '8px',
                  border: '1px solid #fff'
                }}
                variant='outline-primary'
              >
                Components
              </Button>
              <br />
              <p style={{ color: '#6c757d' }}>Current version: 1.0.0-beta.16</p>
            </Jumbotron>
            >
          </Col>
          <Col
            className='col-lg-3'
            style={{ backgroundColor: '#282C35' }}
          ></Col>
        </Row>
        <Row>
          <Col className='col-lg-4' style={{ backgroundColor: '#ffff' }}>
            <Card Card style={{ marginTop: '10px' }}>
              <CardTitle style={{ textAlign: 'center', fontSize: '1.6rem' }}>
                Rebuild With React
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col className='col-lg-4' style={{ backgroundColor: '#ffff' }}>
            <Card style={{ marginTop: '10px' }}>
              <CardTitle style={{ textAlign: 'center', fontSize: '1.6rem' }}>
                Bootstrap at its core
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col className='col-lg-4' style={{ backgroundColor: '#ffff' }}>
            <Card style={{ marginTop: '10px' }}>
              <CardTitle style={{ textAlign: 'center', fontSize: '1.6rem' }}>
                Accessible by default
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
