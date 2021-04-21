import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import './App.scss';
import getJokes from '../helpers/data/jokeData';

function App() {
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const getMoreJokes = () => {
    getJokes()
      .then((jokes) => {
        setSingleJoke(jokes);
      });
  };

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      getMoreJokes();
    } else {
      setShowPunchline(true);
    }
  };

  useEffect(() => {
    getMoreJokes();
  }, []);

  console.warn(singleJoke);

  return (
    <div className='App'>
      <div>
        <Card
        className='card'
        body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <h2>GOT JOKES?</h2>
          <p>{singleJoke.setup}</p>
          <p>{showPunchline && singleJoke.punchline}</p>
          <Button color="info" onClick={handleClick}>
            {showPunchline ? 'Get New Joke' : 'Show the Punchline'}
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default App;
