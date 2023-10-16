import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./global";
import Logomarca from "./assets/logo.png";
import Mulher from "./assets/mulher-background.png";
import Menina from "./assets/menina.png";

const Header = styled.header`
  background-color: #ffa0d9;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  width: 80vw;
  font-size: 20px;
  list-style: none;
`;

const H2 = styled.h2`
  color: #ffa0d9;
  margin: 15px;
  font-size: 30px;
`;

const Section = styled.section `
  display: flex;
  justify-content: space-around;
  margin: 25px;
   img{
    width: 580px;
  }
`

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  text-align: center;
`;

const P = styled.p`
  margin: 10px;
  padding: 12px;
  border-radius: 25px;
  font-size: 24px;
  width: 55vw;
  height: 10vh;
  background-color: #ffa0d9;
`;

const Footer = styled.footer`
background-color: #ffa0d9;
display: flex;
align-items: center;
justify-content: space-around;
height: 20vh;
img{
  width: 200px;
}
a{
  color: #FFFFFF;
  font-size: 25px;
}
`;

export default function App() {
  const conteudo = [
    {
      posicao: 1,
      frase: "Nódulo palpável na mama;"
    },

    {
      posicao: 2,
      frase: "Pele avermelhada ou retraída, sem resposta a tratamentos tópicos;"
    },

    {
      posicao: 3,
      frase:
        "Alterações no mamilo, incluindo a inversão do mamilo ou a saída anormal de secreção;"
    },

    {
      posicao: 4,
      frase: "Dor ou inchaço em parte ou na totalidade das mamas;"
    },

    {
      posicao: 5,
      frase: "Nódulos cervicais ou na axila."
    }
  ];

  return (
    <>
      <GlobalStyle />
      <Header>
        <img src={Logomarca} alt="logo do outubro rosa" />
        <Ul>
          <li>CARTILHA </li>
          <li>FOLHETO COLO DO ÚTERO</li>
          <li>FOLHETO MAMA</li>
          <li>KIT MATERIAIS</li>
        </Ul>
      </Header>

      <main>
        <section>
          <H2>
            Os principais sinais de alerta ou sintomas do câncer de mama são:
          </H2>
        </section>

        <Section>
          <Div>
            {conteudo.map((item) => (
              <P>
                {item.posicao} {item.frase}
              </P>
            ))}
          </Div>
          <img src={Mulher} alt="figura de uma mulher"/>
        </Section>
      </main>

      <Footer>
        <a
          href="https://www.gov.br/inca/pt-br"
          target="_blank"
          rel="noreferrer"
        >
          Instituto Nacional de Câncer - INCA
        </a>
        <img src={Menina} alt="figura de uma menina" />
        <a
          href="https://www.uicc.org/events/special-focus-dialogue-rethinking-pink-october-how-increase-engagement-public-virtually"
          target="_blank"
          rel="noreferrer"
        >
          Union for International Cancer Control (UICC)
        </a>
      </Footer>
    </>
  );
}

