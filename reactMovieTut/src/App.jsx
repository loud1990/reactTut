import './App.css'

function App() {
  return (
    <>  {/* fragment to encapsulate everything, can only have one parent element inside a function in react*/}
      <Text display = "whats up"/>
      <Text display="hello" />
    </>
  )
}

function Text({display}) { {/*define the component in a function here, then in the function above, use the component with the <Text /> tag */}
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
