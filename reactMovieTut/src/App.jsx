import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 1;

  
  return (
    <>  {/* fragment to encapsulate everything, can only have one parent element inside a function in react*/}
      {/*conditional rendering below, condition, condition if true, then condition if false after colon*/}
      {movieNumber === 1 ?( 
      <MovieCard movie={{title:"Lou's Film", release_date: "2024"}}/>
    ) : (
      <MovieCard movie={{title:"Joe's Film", release_date: "2023"}}/>
    )}
    </>
  );
}

function Text({display}) { {/*define the component in a function here, then in the function above, use the component with the <Text /> tag */}
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
