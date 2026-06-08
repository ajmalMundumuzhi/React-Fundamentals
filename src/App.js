import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Greet';
import Welcome from './components/Wekcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import 

function App() {
  return (
    <div className="App">
      {/* <FirstComponent />
      {/* <Hello /> */}

      <Greet name="Ajmal" superName="Spider Man">
        <p>This is children props</p>
      </Greet>
      <Greet name="Muhammed" superName="Batman">
        <button>Action</button>
      </Greet>
      
      <Welcome name="Ajmal" superName="Spider Man" />
      <Welcome name="Muhammed" superName="Batman" />

    </div>
  );
}

export default App;
