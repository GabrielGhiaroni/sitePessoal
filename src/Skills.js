import React from 'react'
import styled from 'styled-components';
import imgHTML from './img/html-1.svg';
import imgCSS from './img/css-3.svg';
import imgJavaScript from './img/logo-javascript.svg';
import imgReact from './img/react.png';
import imgNode from './img/node.png';
import imgPostgre from './img/postgre.png';


const tecnologiasSkills = {
    display: 'flex',
    justifyContent: 'center'
};

const icones = {
    width: '50px',
    height: '50px'
};

const blob = {
  width: '80px',
  height: '100px',
  backgroundColor: '#F4F4F4',
  borderRadius: '3rem',
  display: 'grid',
  placeItems: 'center'
}

const tecnologia = {
  marginRight: '20px'
}

const nomeSkill = {
  textAlign: 'center'
}


const Skills = () => {
  return (
      <>
        <h1 style={{marginTop: '60px', marginBottom: '60px', textAlign:'center'}}>Skills</h1>
        <div style={tecnologiasSkills}>
          <div style={tecnologia}>
            <div  style={blob}>
              <img style={icones} src={imgHTML} alt="logo-html" />
            </div>
            <p style={nomeSkill}>HTML</p>
          </div>

          <div style={tecnologia}>
            <div style={blob}>
              <img style={icones} src={imgCSS} alt="logo-html" />
            </div>
            <p style={nomeSkill}>CSS</p>
          </div>
            
          <div style={tecnologia}>
            <div style={blob}>
              <img style={icones} src={imgJavaScript} alt="logo-html" />
            </div>
            <p style={nomeSkill}>JavaScript</p>
            </div>

            <div style={tecnologia}>
            <div style={blob}>
              <img style={icones} src={imgReact} alt="logo-html" />
            </div>
            <p style={nomeSkill}>React</p>
            </div>

            <div style={tecnologia}>
              <div style={blob}>
                <img style={icones} src={imgNode} alt="logo-html" />
              </div>
              <p style={nomeSkill}>Node.js</p>
            </div>

            <div style={tecnologia}>
              <div style={blob}>
                <img style={icones} src={imgPostgre} alt="logo-html" />
              </div>
              <p style={nomeSkill}>PostgreSQL</p>
            </div>
        </div>
    </>
  )
}

export default Skills;