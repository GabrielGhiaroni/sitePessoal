    import React from 'react';
    import nimbus from './img/nimbus.jpg'
    import animaisFantasticos from './img/animaisfantasticos.jpeg';
    import styled from 'styled-components';
    
    const Titulo = styled.h1`
        margin-bottom: 60px;
        text-align: center;
    `;

    const Slider = styled.div`
        margin: 0 auto;
        width: 800px;
        height: 400px;
        overflow: hidden;
    `;

    const Slides = styled.div`
        width: 400%;
        height: 400px;
        display: flex;
    `;

    const Input = styled.input`
        display: none;
        &#radio1:checked ~ .first{
            margin-left: 0;
        }
        &#radio1:checked ~ .navigation-auto .auto-btn1 {
            background-color: #FFF;
        }
        &#radio2:checked ~ .first{
            margin-left: -25%;
        }
        &#radio2:checked ~ .navigation-auto .auto-btn2 {
            background-color: #FFF;
        }
    `;
    
    const Slide = styled.div`
        width: 25%;
        position: relative;
    `;

    const Img = styled.img`
        width: 800px;
    `;

    const NavegacaoBtn1 = styled.div`
        border: 2px solid #FFF;
        padding: 5px;
        border-radius: 10px;
        transition: 1s;
        margin-right: 10px;
    `;

    const NavegacaoBtn2 = styled.div`
        border: 2px solid #FFF;
        padding: 5px;
        border-radius: 10px;
        transition: 1s;
    `;

    const NavegacaoAuto = styled.div`
        position: absolute;
        width: 800px;
        margin-top: 370px;
        display: flex;
        justify-content: center;
    `;

    const ManualNavegacao = styled.div`
        position: absolute;
        width: 800px;
        margin-top: -30px;
        display: flex;
        justify-content: center
    `;

    const ManualBtn = styled.label`
        border: 2px solid #FFF;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
        &:not(:last-child) {
            margin-right: 10px;
        }
        &:hover {
            background-color: #FFF;
        }
    `;

    const linkProjeto = styled.a`
    `;


    const Projetos = () => {

        let count = 1;
        document.getElementById('radio1').checked = true;

        setInterval(() => {
            nextImage();
        }, 2000)
 
        function nextImage() {
            count++;
            if(count > 2) {
                count = 1
            };
            document.getElementById('radio'+count).checked = true;
        }

      return (
        <>
            <Titulo>Projetos</Titulo>

            <Slider>
                <Slides>
                    <Input type="radio" name="radio" id='radio1'></Input>
                    <Input type="radio" name="radio" id='radio2'></Input>

                    <Slide className='first'>
                            <Img src={nimbus}></Img>
                    </Slide>

                    <Slide>
                        <Img src={animaisFantasticos}></Img>
                    </Slide>

                    <NavegacaoAuto className='navigation-auto'>
                        <NavegacaoBtn1 className='auto-btn1'></NavegacaoBtn1>
                        <NavegacaoBtn2 className='auto-btn2'></NavegacaoBtn2>
                    </NavegacaoAuto>

                </Slides>

                <ManualNavegacao>
                    <ManualBtn htmlFor="radio1"></ManualBtn>
                    <ManualBtn htmlFor="radio2"></ManualBtn>
                </ManualNavegacao>
            </Slider>
        </>
      )
    };
    
    export default Projetos;