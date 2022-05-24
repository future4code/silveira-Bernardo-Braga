// import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends React.Component {

    render() {
        
    
      return (
        <div>
            <Etapa1></Etapa1>
            <Etapa2></Etapa2>
            <Etapa3></Etapa3>
            <Final></Final>

        </div>
      );
    }
}

export default App;
