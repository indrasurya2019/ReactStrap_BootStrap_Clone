import React from 'react';
import {
  Image,
  Card,
  Jumbotron,
  Button,
  Navbar,
  Nav,
  Container
} from 'react-bootstrap';
import '../App.css';
import LogoSmall from '../img/bootstrap_kecil.svg';
export default function HeaderStrap() {
  return (
    <div>
      {/* */}
      <div>
        <Navbar className='MyNavbar' bg='dark' variant='dark'>
          <Image src={LogoSmall} style={{ width: '25px' }} />
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>GettingStarted</Nav.Link>
            <Nav.Link href='#pricing'>Components</Nav.Link>
          </Nav>
          <Button
            className='MyButton'
            style={{ border: '1px solid grey', color: 'white' }}
            variant='outline-primary'
          >
            v1.0.0-Beta.16 (BootStrap 4.3)
          </Button>
          <div className='FontAwe1'>
            <i class='fab fa-github fa-2x'></i>
          </div>
          <div className='FontAwe2'>
            <i className='FontAwe2' class='fab fa-discord fa-2x'></i>
          </div>
        </Navbar>
      </div>
      <div className='Container'>
        <div className='Container-1'></div>
        <div className='Container-2'>
          <Jumbotron
            fluid
            className='MyJumbotron'
            style={{ padding: '10px', backgroundColor: '#282C35' }}
          >
            <Container>
              <h1
                style={{
                  fontWeight: '700',
                  fontSize: '3.2rem',
                  color: '#61dafb',
                  margin: '4rem 0'
                }}
              >
                React Bootstrap
              </h1>
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
            </Container>
          </Jumbotron>
        </div>
        <div className='Container-3'></div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: '15px'
        }}
      >
        <Card
          style={{
            width: '20rem',
            marginLeft: '5rem'
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: '1.6rem' }}>
              Rebuilt With React
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '20rem',
            marginLeft: '5rem'
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: '1.6rem' }}>
              Bootstrap at its core
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: '20rem',
            marginLeft: '5rem'
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: '1.6rem' }}>
              Accessible by default
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
