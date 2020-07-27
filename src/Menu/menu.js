import React from 'react'
import { Container,Row,Col,Breadcrumb } from 'react-bootstrap'
import { Link }  from 'react-router-dom'


const Menu = () => {
  
    return (
          
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/form">  Registro </Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/peli">  Peliculas </Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/ani">  Anime </Link></Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
          
        
      </Container>
    )
}

export default Menu