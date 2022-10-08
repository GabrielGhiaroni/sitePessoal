    import React from 'react'
    import darkMode from './img/night-mode.png'

    const header = {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        position: 'sticky'
    }

    const nav = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    }

    const itensNav = {
        marginRight: '30px'
    }

    const Header = () => {
      return (
        <div style={header}>
            <div>
                <h3>Gabriel Ghiaroni</h3>
            </div>
            <div style={nav}>
                <h3 style={itensNav}>Home</h3>
                <h3 style={itensNav}>Skills</h3>
                <h3 style={itensNav}>Portfolio</h3>
                <h3 style={itensNav} >Contato</h3>
                <img src={darkMode} style={{width: '24px', height: '24px'}}/>
            </div>
        </div>
      )
    }
    
    export default Header;