import { useState } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

// fce8b578

const API_URL = "http://www.omdbapi.com/?apikey=fce8b578";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {

        if (title !== '') {

            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            
            if (data.Response === 'True') {
                setMovies(data.Search);
            } else {
                setMovies([]);
            }
        }
    }



    return(
        <>
            <section className="app">
                <h1 className="title">MovieLand</h1>

                <div className="search">
                    <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && searchMovies(searchTerm)} />
                    <img src={SearchIcon} alt="search icon input" onClick={() => searchMovies(searchTerm)} />
                </div>

                {movies.length > 0 ? (

                    <div className="container">
                        {movies.map((movie) => <MovieCard movie={movie} />)}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
            </section>
        </>
    );
};

export default App;