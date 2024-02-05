import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => console.log("ERROR: Api couldn't fetch"));
  }, []);

  return (
    <>
      <h1>Jokes full Stack</h1>
      <div className="container">
        <p>jokes: {jokes.length}</p>
        {
          jokes.map((joke) => (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.joke}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
