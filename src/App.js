import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'
import demo from './demo.mp4';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h3> Elevator Simulation </h3>
      </div>
      <div className="Info">
        <p> Created by: Janahan Dhushenthen and Brandon Bwanakocha </p>
        <p> Last updated: 13/11/2020 </p>
      </div>
      <div className="Video">
        <ReactPlayer url={demo} width="100%" height="100%" controls={true} />
      </div>
    </div>
  );
}

export default App;
