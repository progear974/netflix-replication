import React, { useState, useEffect } from 'react'
import axios from './axios'
import { base_image_url } from './requests';
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return (request)
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl)
            setTrailerUrl('')
        else {
            movieTrailer(movie?.title || movie?.name || movie?.original_title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                 })
                .catch((error) => console.log(error))
        }
    }
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => <img onClick={ () => handleClick(movie) } key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_image_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />)}
            </div>
            {/* title */}
            {/* title */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;