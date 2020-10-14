import React,{useEffect, useState} from 'react';

const App = () => {

  const APP_ID = 'd52ce565';
  const APP_KEY = 'ae866e8bb3383dcb7a0c888c9af8aec9';
  const exampleReq = 
`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

const [counter, setCounter] = useState(0);
useEffect(()=>{
  console.log('Effect has been run')
});

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button 
        className="search-button" 
        type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
