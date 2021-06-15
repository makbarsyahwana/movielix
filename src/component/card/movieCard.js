import React, { useEffect, useContext, useState } from 'react';
import { StyledMovieCard } from './style';

export default function MovieCard({movie, onClick}) {
    return(
        // <React.Fragment>
        //     <div style={{
        //         marginRight: '1em',
        //         marginLeft: '1em',
        //         // marginTop: '2em',
        //         color: 'white',
        //         borderRadius: '10px',
        //         flex: "1 1 calc(10% - 8px)",
        //     }}>
        //         <img className="movie-image" style={{
        //             width: '200px',
        //             height: '300px',
        //             borderRadius: '10px'
        //         }} src={movie.Poster}></img>
        //         <p>{movie.Title}</p>
        //     </div>
        // </React.Fragment>
        <React.Fragment>
            <StyledMovieCard onClick={onClick}>
                <img className="movie-image" src={movie.Poster}></img>
                <p>{movie.Title}</p>
            </StyledMovieCard>
        </React.Fragment>
    )
} 