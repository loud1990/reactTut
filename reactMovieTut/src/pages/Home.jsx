import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {
    const [ searchQuery, setSearchQuery] = useState(""); 
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } 
            catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault(); 
        if(!searchQuery.trim()) return;
        if(loading) return;
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults);
            setError(null);
        }   catch {
            console.log(err)
            setError("Failed to search for movies...");
        }
        finally {
            setLoading(false);
        }
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">Error: {error}</div>}

        {/*If we are loading, load the loading div, else load the movies grid*/}
        {loading ? (<div className="loading">Loading...</div>
        ) : (
        <div className="movies-grid">
            {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard movie={movie} key={movie.id} />))}
            {/*whenever you perform a state change, the entire component is re-rendered*/}
        </div>
        )}
    </div>
}

export default Home