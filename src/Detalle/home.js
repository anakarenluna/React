import React, { Component } from 'react'
import { Title } from '../components/Title'
import { SearchForm} from '../components/SearchForm'
import { MovieList } from '../components/movieList'

import {Container} from 'react-bootstrap'


export class Home extends Component{

    state = {
        usedSearch: false,
        results: []
              }
    
      handleResults = (results) => {
        this.setState({ results, usedSearch:true })
      }
    
     
      renderResults()
      {
        return this.state.results.length === 0 
          ? <p>Sin resultados! </p>
         
          : <MovieList  movies={this.state.results} />
      }

    
    
    render () //renderiza todo
    {
        return (
            <Container>
                           

              <div className="Home">
                <Title>MovieLu</Title>
                    <div className='SearchForm-Wrapper'>
                    <SearchForm  onResults={this.handleResults} />
                     </div> 
                        {
                         this.state.usedSearch
                        ? this.renderResults()
                        : <small> usa correctamente el buscador</small>
                        }
                     
            </div>
             
            </Container>
        )
    }
}