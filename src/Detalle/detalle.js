import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './detalle.css'

const API_KEY = '15a090d6'

export class Detalle extends Component{
    static propTypes = {
        match: PropTypes.shape({  //objeto params de la url
            params: PropTypes.object,
            isExact: PropTypes.bool, //rura ecata a la esperada
            path: PropTypes.string, //patron de la ruta
            url: PropTypes.string //url match con la ruta
        })
    }

    state = {
        movie: {} //datos guardados en el state
    }

    fetchMovie ({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`) //alert asincrono
        .then(res => res.json()) //devuelve promesas
        .then(movie => {
          console.log({ movie })
          this.setState({ movie })
        })

    }

    componentDidMount () { //indica que al menos sera renderizado alguna vez
        console.log(this.props)
        const { movieId } = this.props.match.params
        this.fetchMovie({ id: movieId })
    }

    volver () {
        window.history.back()
    }


    render () {
        const  { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div className="Detail">
                <div className="Detail__card">
                    <div className="Detail__column Detail__column_img">
                     <img  src = {Poster} alt={Title} className="Detail__poster Detail__poster_blured"  />
                     <img  src = {Poster} alt={Title} className="Detail__poster"  />
                     </div>
                    <div className="Detail__column Detail__description">    
                        <h2 className="Detail__title title" >{Title}</h2>
                    <p> 
                    <strong>Actores:</strong>
                    <br/>
                    {Actors}
                    </p>
                    <p>
                    <strong>Puntaje:</strong>
                    <br/>
                    {Metascore}
                    </p>
                     <p>
                     <strong>Descripción:</strong>
                    <br/>
                    {Plot}
                    </p> 

                <button onClick={this.volver} 
                className="Detail__footer"> 
                Regresar </button>
            </div>
        </div>
    </div>

        )
    }
}