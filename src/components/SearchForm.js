import React, { Component} from 'react'

const API_KEY = '15a090d6'


export class SearchForm extends Component{

    //estado
    state = {
        inputMovie: ''
    }

    handleChange  = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        /* alert(this.state.inputMovie) */
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`) //alert asincrono
        .then(res => res.json()) //devuelve promesas
        .then(results => {
             /* console.log(results) */
          const { Search = [], totalResults = "0" } = results
          console.log({ Search, totalResults })
          this.props.onResults(Search)
          //window.sessionStorage.setItem('sessionMovies',JSON.stringify(Search));
        })
        

    } 

    render (){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input 
                    className="input"
                    onChange={this.handleChange} 
                    type="text" 
                    placeholder="Busca tu pelicula....." />
                 </div>
                <div className="control">
                    <button className="button is-info">
                     Buscar
                    </button>
                 </div>
            </div>
            </form>
        )
    }
}