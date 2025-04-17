import logo from './logo.svg';
import './App.css';
import ny from './ny.jpg'

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <div className="img-sec"> 
        <img style={{width:'250px',height:'350px'}} src={ny}></img>
        </div>
        
        <div className="content">
          <p id="travel">TRAVEL</p>
          <h3>10 best thing in New York</h3>
          <p id="travel2">New York is one of the main cities in States.</p>
        </div>
      </div>
    </div>
  );
} 

export default App;
