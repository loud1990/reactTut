import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';

function App() {
  const movieNumber = 1;

  
  return (
    <>  
    <Home />
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
