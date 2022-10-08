    import React from 'react'
    import img from './img/profile.jpg'
    


    const Home = () => {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
                <h3>Biografia</h3>
                <h4>
                    Olá, meu nome é Gabriel. <br />
                    Sou formado pela Cubos Academy <br />
                    como desenvolvedor Back-end <br />
                    Nos últimos meses, <br />
                    dedicado os últimos meses a <br />
                    estudar Front-end & Mobile
                </h4>
                <h3>Contato</h3>
                <h4>
                    Rio de Janeiro <br />
                    gabrielghiaroni@outlook.com <br />
                    (21) 98361-775
                </h4>
            </div>
                <img src={img} alt="profile" style={{maxWidth: '500px', maxHeight: '600px'}} />
                <div style={{display: 'flex', marginRight: '10px'}}>

                </div>
            <div>
                <h3>Stacks</h3>
                <h4>
                    Front-end <br />
                    Mobile <br />
                    Back-end
                </h4>
                <h3>Projetos Finalizados</h3>
                <h4>
                    xxxxxx
                </h4>
            </div>
        </div>
      )
    }
    
    export default Home