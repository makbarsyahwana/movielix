import React, { useEffect, useContext, useState } from 'react';
import MovieCard from '../component/card/movieCard'
import { getMovieDetails } from '../action/movieAction';
import { GlobalContext } from '../context/globalState';


export default function MovieDetails({location}) {
    const [state, dispatch] = useContext(GlobalContext)
    const movieDetails = state.movie.movieDetails

    useEffect(() => {
        console.log(location.state.movie)
        getMovieDetails(dispatch, {
            imdbID: location.state.movie.imdbID
        })
    },[])
    console.log(state.movie.movieDetails)

    return (
        <React.Fragment>
            <div style={{
                height: '100vh',
                padding: '2em',
                display: "flex",
                flexDirection: "row"
            }}>
                <div>
                    <MovieCard  
                    movie={location.state.movie}
                    />
                </div>
                <div style={{
                    border: "10px",
                    borderRadius: "10px",
                    borderColor: "white",
                    marginLeft: "3em",
                    marginRight: "3em",
                }}>
                    <table class="table table-striped table-dark">
                    <tbody>
                        <tr>
                        <th scope="row">Year</th>
                        <td>{movieDetails.Year}</td>
                        </tr>
                        <tr>
                        <th scope="row">Production</th>
                        <td>{movieDetails.Production}</td>
                        </tr>
                        <tr>
                        <th scope="row">Plot</th>
                        <td>{movieDetails.Plot}</td>
                        </tr>
                        <tr>
                        <th scope="row">Country</th>
                        <td>{movieDetails.Country}</td>
                        </tr>
                        <tr>
                        <th scope="row">Genre</th>
                        <td>{movieDetails.Genre}</td>
                        </tr>
                        <tr>
                        <th scope="row">Writer</th>
                        <td>{movieDetails.Writer}</td>
                        </tr>
                        <tr>
                        <th scope="row">Actors</th>
                        <td>{movieDetails.Actors}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}