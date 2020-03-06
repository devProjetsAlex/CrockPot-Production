import React from 'react';
import './App.css';
import Homepage from './container/Homepage/Homepage'
import Background from './component/Background/Background'

function App() {
  return (
    <>
    <div className='App'>
    <Background>
      <Homepage/>
    </Background>
    </div>
    </>
  );
}

export default App;
