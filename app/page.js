"use client";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Search from './components/Search';
import Movies_card from './components/Movies_card';
import { Data } from './data';


function Page() {
    const [movies, setMovies] = useState(Data);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {

        const lastSearch = localStorage.getItem("lastSearch") || "";

        if (lastSearch != "" && searchTerm != "") {
            fetch(`https://www.omdbapi.com/?apikey=7f38cf13&s=${searchTerm}`)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.Search || []);
                })
                .catch(console.error);
        } else if (lastSearch != "" && searchTerm == "") {
            setSearchTerm(lastSearch);

        } else if (lastSearch == "") {
            setSearchTerm("");
            setMovies(Data)
        }

    }, [searchTerm]);

    return (

        <div>
            <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <Movies_card
                movies={movies}
            />
        </div>
    )
}
export default Page;