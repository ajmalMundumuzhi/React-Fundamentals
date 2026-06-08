import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Greet';
import Welcome from './components/Wekcome';


function App() {
  return (
    <div className="App">
      <FirstComponent />
      <Welcome />
    </div>
  );
}

export default App;
