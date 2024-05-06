import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Title}</p>
            </div>
            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt="movie poster" />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
};
export default MovieCard;