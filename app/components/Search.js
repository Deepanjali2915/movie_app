"use client";

import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import Link from "next/link";

function Search({ searchTerm, setSearchTerm }) {
    const [input, setInput] = useState(searchTerm);


    const handleSearch = () => {
        localStorage.setItem("lastSearch", input);
        setSearchTerm(input);
    };

    const handleClearSearch = () => {
        localStorage.removeItem("lastSearch");
        setSearchTerm("");
        
    };

    return (
        <div>

            <Link href="/" id="autoRedirect"></Link>

            <div className="search-group">
                <div className="form-outline">
                    <input type="search" className="search" placeholder="Search movies..." value={input} onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <Link href={`./?query=${input}`}>
                    <button className="go" onClick={handleSearch}>GO</button>
                </Link>
            </div>
            
            <div className="search-home">
                    <button className="movie-button" onClick={handleClearSearch}> Clear search</button>
            </div>

        </div>
    );
}
export default Search;
