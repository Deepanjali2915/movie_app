"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import "/app/globals.css";
import Rating from "@/app/components/Rating";
import AverageRating from "@/app/components/Average";

function Details() {
    const params = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (!params.id) return;

        fetch(`https://www.omdbapi.com/?apikey=7f38cf13&i=${params.id}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovie(data);
                }
            })
            .catch(error => console.error("Fetch error:", error));
    }, []);

    if (!movie) {
        return <h1 className="detailsText-h1">Movie loading...</h1>;
    }

    return (
        <>
            <h1 className="detailsText-h1">{movie.Title}</h1>
            <div className="details-container">
                <div className="details-image">
                    <img className="card-image" src={movie.Poster} />
                </div>
                <ul className="details-list">
                    <li className="detailsText">Plot: {movie.Plot}</li>
                    <li className="detailsText">Released: {movie.Released}</li>
                    <li className="detailsText">IMDB Rating: {movie.imdbRating}</li>
                    <li className="detailsText">
                        <AverageRating productId={movie.imdbID} />
                    </li>
                    <h3 className="detailsText rating">
                        Give the rating only once
                        <Rating productId={movie.imdbID} />
                    </h3>
                </ul>
            </div>
            <Link href={`/`}>
                <div>
                    <button className="home-button">Home Page</button>
                </div>
            </Link>
        </>
    );
}
export default Details;
