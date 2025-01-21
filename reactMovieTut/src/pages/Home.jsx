import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"
{/*Home page, display multiple movies, search form to search for movies*/}

function Home() {
    const [ searchQuery, setSearchQuery] = useState(""); 
    {/*searchQuery is the state, setSearchQuery is the function that sets the state , what is in useState is the default value*/}
  
    const movies = [
        {id:1, title: "John Wick", release_date: "2020"},
        {id:2, title:"Terminator", release_date:"1999"},
        {id:3, title: "The Matrix", release_date: "1998"},
    ];

    const handleSearch = (e) => {
        e.preventDefault() 
        {/*above code:prevent the default behavior of refreshing the page, so that our text stays in the box after clicking search button*/}
        alert(searchQuery)
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard movie={movie} key={movie.id} />))}
            {/*whenever you perform a state change, the entire component is re-rendered*/}
        </div>
    </div>
}

export default Home