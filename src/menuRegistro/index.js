import React from 'react';
import  Forms   from '../Registro/registro';
import { Route, BrowserRouter } from 'react-router-dom'//componentes de React router
import { Container,Col } from 'react-bootstrap'



const MenuRegistro = () => {

    
    return(
        <Container>
            <BrowserRouter>
              
                    <Col>
                    <Route  path='/form' exact component={Forms} ></Route>
                    
                    </Col>    
            </BrowserRouter>
        </Container>

    )

}
export default MenuRegistro