import React from 'react';
import './App.css';
import Homepage from './container/Homepage/Homepage'
import Background from './component/Background/Background'
import Layout from './component/Layout/Layout.component'
function App() {
  return (
    <>
    <div className='App'>
      <Layout/>
    <Background>
      <Homepage/>
    </Background>
   
    </div>
    </>
  );
}

export default App;
