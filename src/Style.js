import React from 'react'
import './Style.css'
import Landing from './Landing'
import Player from './Player'

function Style({movie, trailer, query}) {
    return (
        <div>
            <br/>
            {
            query === '' ? <Landing /> : (
                <div className='alignment'>
                    <br/>
                    <br/>
                    <h1>{movie.Title}</h1>
                    <br/>
                    <img src={movie.Poster} />
                    <br/>
                    <br/>
                    <br/>
                    <Player trailer={trailer} />
                    <p style={{'lineHeight':'20px'}}>{movie.Plot}</p>
                    <h2>Genre:  {movie.Genre}</h2>
                    <h2 style={{'lineHeight':'20px'}}>Actors:  {movie.Actors}</h2>
                    <h2>Year:  {movie.Year}</h2>
                    <h2>Director:  {movie.Director}</h2>
                    <h2 style={{'lineHeight':'20px'}}>Writer:  {movie.Writer}</h2>
                    <h2>Language:  {movie.Language}</h2>
                    <h2>Awards:  {movie.Awards}</h2>
                    <h2>Box Office collections:  {movie.BoxOffice}</h2>
                    <h2>Production:  {movie.Production}</h2>
                    <br/>
                    <br/>
                    <br/>
                </div>)  
                }
        </div>
    )
}

export default Style

