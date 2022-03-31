import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import { base_image_url } from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            const random_movie = request.data.results[Math.floor(Math.random() * request.data.results.length)]
            console.log(random_movie)
            setMovie(random_movie)
            return (request)
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner" style={{
            backgroundImage: `url("${base_image_url}${movie.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner__content">
                <div className="banner__title">
                    <h1>{movie?.title || movie?.name || movie?.original_title}</h1>
                </div>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__description">
                    <h1>{truncate(movie?.overview, 150)}</h1>
                </div>
                
            </div>
            <div className="banner--fadeBottom"></div>
            {/* div > 2 button */}
            {/* description */}
        </header>
    )
}

export default Banner
