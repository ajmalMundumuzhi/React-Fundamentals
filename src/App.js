import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Greet';
import Welcome from './components/Wekcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Count from './components/Count';
import BindEvent from './components/BindEvent';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      {/* <StyleSheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <BindEvent /> */}
      {/* <Count /> */}
      {/* <Message /> */}
      {/* <FirstComponent />
      {/* <Hello /> */}

      {/* <Greet name="Ajmal" superName="Spider Man"> */}
        {/* <p>This is children props</p> */}
      {/* </Greet> */}
      {/* <Greet name="Muhammed" superName="Batman">
        <button>Action</button>
      </Greet> */}
      
      {/* <Welcome name="Ajmal" superName="Spider Man" />
      <Welcome name="Muhammed" superName="Batman" /> */}

    </div>
  );
}

export default App;
