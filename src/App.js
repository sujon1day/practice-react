import {useState} from 'react';
import './App.css';

const App = () =>{
  return(
    <div>
      <MovieCounter></MovieCounter>
    </div>
  );
}














const MovieCounter = () => {
  // const movies = useState(0);
  // console.log(movies);
  // const [x, y] = [10, 3];
  // console.log(x, y);

  const [count, setCount] = useState(0);

  return(<div className="App">
    <button className="btn" onClick={() => setCount(count + 1)}>Add Movie</button>
    <h3>Number of movies: <span>{count}</span></h3>
    <hr></hr>
    <AnotherMovieComponent movies={count}></AnotherMovieComponent>
    <AnotherMovieComponent movies={count + 10}></AnotherMovieComponent>
    <AnotherMovieComponent movies={count + 5}></AnotherMovieComponent>
    <AnotherMovieComponent movies={count + 3}></AnotherMovieComponent>
    <AnotherMovieComponent movies={count + 1}></AnotherMovieComponent>
  </div>);
}



const AnotherMovieComponent = (props) => {
  console.log(props)
  const {movies} = props;
  return(
    <div className="App">
      <h1>Another Component</h1>
      <h3>Movies: {movies}</h3>

    </div>
  );
}


export default App;
