import React, { useEffect, useContext, useState } from 'react';
import MovieCard from '../component/card/movieCard'
import Pagination from '../component/pagination';
import { GlobalContext } from '../context/globalState'
import { getMovieList } from '../action/movieAction';

export default function MovieList({history}) {
    const [searchValue, setSearchValue] = useState("Batman")
    const [titleValue, setTitleValue] = useState("Batman")
    const [pageValue, setPageValue] = useState(1)
    const [state, dispatch] = useContext(GlobalContext)

    useEffect(() => {
        fetchMovies(searchValue, pageValue)
    },[])
    
    console.log(state)
    console.log(searchValue)

    function fetchMovies(movieName, page) {
        getMovieList(dispatch, {
            s: movieName,
            page: page
        })
        setTitleValue(movieName)
    }

    return(
        <React.Fragment>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '2em',
                marginLeft: '2em',
                // color: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <h1 style={{
                    textAlign: 'left',
                    color: 'white'
                    }}>{titleValue}</h1>


                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <input 
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }}
                        placeholder="search a movie" 
                        type="text"
                        style={{
                            border: "1px",
                            textAlign: 'center',
                            alignItems: 'flex-end',
                            borderRadius: '5px',
                            width: "150px",
                            height: "30px",
                            margin: 'auto',
                            // marginRight: 0                      
                        }}>
                        </input>
                        <button 
                        onClick={() => {
                            fetchMovies(searchValue, pageValue)
                        }}
                        style={{
                            border: "1px",
                            textAlign: 'center',
                            alignItems: 'flex-end',
                            borderRadius: '5px',
                            width: "60px",
                            height: "30px",
                            margin: 'auto',
                            // marginRight: 0 
                        }}>
                            Search
                        </button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    // overflow: 'hidden',
                    // marginRight: '2em',
                    // marginLeft: '2em',
                }}>
                    {state.movie.movieList ? state.movie.movieList.map((movie, id) => (
                            <MovieCard 
                            key={id} 
                            movie={movie}
                            onClick={() => history.push({
                                pathname: `/${movie.Title}`,
                                state: {
                                    movie: movie
                                }
                            })}
                            />
                    )) : <p>No Data</p>}
                </div>
                <Pagination 
                currentPage={pageValue} 
                movieName={searchValue}
                totalResults={state.movie.totalResults} 
                fetchMoviesData={targetPage => {
                    console.log(targetPage)
                    fetchMovies(searchValue, targetPage)
                }
                }
                />
            </div>
        </React.Fragment>
    )
}