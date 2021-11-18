import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Sara",
    age: 33,
    profession: "Developer"
  }
  var style = {
    color: '#000',
    backgroundColor: '#fff',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '3rem',
    profStyle:{
      color:"red",
      fontSize: "2.5rem",
      padding: "1rem",
      fontWeight: "bold",
      boxShadow: "3px 2px 15px 0 #fff",
      borderRadius: "10px",
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={style}>Name: {person.name}</h3>
        <h3 style={{color: "yellowgreen",fontSize: "2rem",}}>Age: {person.name}</h3>
        <h3 style={style.profStyle}>Profession: {person.profession}</h3>
        
        {5 + 5}

        <Javascript></Javascript>
        <React></React>
        <Javascript></Javascript>
        <React></React>
        <Javascript></Javascript>
        <React></React>
        <Javascript></Javascript>
        <React></React>
        <Javascript></Javascript>
        <React></React>
        

      </header>
      
    </div>
  );
}





// component 
function Javascript () {
  const style = {
    javascript: {
      backgroundColor: "#fff",
      width: "500px",
      borderRadius: "10px",
      boxShadow: "3px 2px 15px 0 #000",
      margin: "1rem"

    },
    h3: {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "2.5rem",
      margin: "1rem",
      borderRadius: "10px",
      padding:".5rem"
    },
    p: {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "2rem",
      margin: "1rem",
      borderRadius: "10px",
      padding:".5rem"
    }
  }

  return(
    <div style={style.javascript}>
      <h3 style={style.h3}>JavaScript</h3>
      <p style={style.p}>"JavaScript is most popular programming language in the world"</p>
    </div>
  );
}




// component 
function React () {
  const style = {
    react: {
      backgroundColor: "#fff",
      width: "500px",
      borderRadius: "10px",
      boxShadow: "3px 2px 15px 0 #000",
      margin: "1rem"
    },
    h3: {
      backgroundColor: "#000",
      color: "cyan",
      fontSize: "2.5rem",
      margin: "1rem",
      borderRadius: "10px",
      padding:".5rem"
    },
    p: {
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "2rem",
      margin: "1rem",
      borderRadius: "10px",
      padding:".5rem"
    }
  }

  return(
    <div style={style.react}>
      <h3 style={style.h3}>React JS</h3>
      <p style={style.p}>"React is a JavaScript Library for building user interface"</p>
    </div>
  );
}

export default App;
