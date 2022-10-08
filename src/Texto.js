    import React from 'react'

    const estiloTexto = {
      textAlign: 'center',
      lineHeight: '50px',
      marginTop: '80px'
    }
    
    const Texto = () => {
      return (
        <>
          <h1 style={estiloTexto}>Olá, meu nome é Gabriel Ghiaroni 👋🏻 <br />
              Front-End & Mobile Developer <br />
          </h1>

          <p style={{textAlign:'center'}}>Based in Rio de Janeiro 🏖️</p>
        </>
      )
    };
    
    export default Texto;