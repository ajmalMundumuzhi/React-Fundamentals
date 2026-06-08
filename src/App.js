import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Greet';
import Welcome from './components/Wekcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <FirstComponent />
      <Welcome /> */}
      <Hello />
    </div>
  );
}

export default App;
