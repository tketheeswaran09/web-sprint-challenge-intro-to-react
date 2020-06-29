import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/").then((response) => {
      setState(response.data.results);
      console.log(response.data.results);
    });
  }, []);
  const mapData = state.map((item) => (
    <Character key={item.name} characterData={item} />
  ))


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">About Star Wars Characters </h1>
      {mapData}
    </div>
  );
}

export default App;