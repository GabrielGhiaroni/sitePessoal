import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import Header from './Header';
import Texto from './Texto';
import Home from './Home';
import Skills from './Skills';
import Projetos from './Projetos';


const App = () => {
  return(
    <div style={{maxWidth: '1200px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px'}}>
      <Header></Header>
      <Texto style={{textAlign: 'center'}}></Texto>
      <Home></Home>
      <Skills></Skills>
      <Projetos></Projetos>
    </div>
  );
};

export default App;