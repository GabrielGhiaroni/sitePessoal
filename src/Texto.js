    import React from 'react'

    const estiloTexto = {
      textAlign: 'center',
      lineHeight: '50px',
      marginTop: '80px'
    }
    
    const Texto = () => {
      return (
        <>
          <h1 style={estiloTexto}>OlÃ¡, meu nome Ã© Gabriel Ghiaroni ðð» <br />
              Front-End & Mobile Developer <br />
          </h1>

          <p style={{textAlign:'center'}}>Based in Rio de Janeiro ðï¸</p>
        </>
      )
    };
    
    export default Texto;