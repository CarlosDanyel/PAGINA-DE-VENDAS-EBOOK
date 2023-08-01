import LogoIcon from './components/svgs/LogoIcon';
import imgJovem from "./assets/jovem-img.png";
import PrecoPng from "./assets/checkco.png";
import SlImg from "./assets/sl.png";

import style from './styles/globals.module.scss';

import imgSobre from "./assets/sobre.png";
import teck1 from "./assets/teck1.png";
import teck2 from "./assets/teck2.png";
import teck3 from "./assets/teck3.png";
import teck4 from "./assets/teck4.png";


import MyComponent from './components/Typed';
import BtnNavbar from './components/BtnNavbar';
import ListaDePerguntas from './components/ListaDePerguntas';
import Verificado from './components/svgs/Verificado';
import ListaGarantia from './components/ListaGarantia';
import ListaDeProvas from './components/ListaDeProvas';
import ListaDeVantagem from './components/ListaDeVantagem';
import ListaDeLinks from './components/ListaDeLinks';

import { Link } from "react-scroll";
import { useState } from 'react';
import Svg1Empre from './components/svgs/verificados/Svg1Empre';
import SvgStar from './components/svgs/verificados/SvgStar';
import SvgVEri from './components/svgs/verificados/SvgVEri';
import ScrollTop from './components/ScrollTop';
import Chat from './components/svgs/Chat';

function App() {

  const [active, setMode] = useState(false);

  const activeMode = () => {
    setMode(!active);
  };

  return (
    <>
      <header>
        <MyComponent className={style.gatilho}/>
          <div className={style.containerHeader}>
            <div className={style.Logo_header}>
                <LogoIcon />
                <span className={style.Logo_text}>CDCODE</span>
              </div>
            <nav className={style.menuLinks}>
                <ListaDeLinks className={active ? `${style.listNavbar} ${style.active}` : style.listNavbar}/>
                <Link
                className={style.compraLink}  
                to={"# "}
                smooth={true} 
                duration={800}
                >Garanta já
                </Link>
                
              <BtnNavbar active={active} onClick={activeMode}/> 
            </nav>
            <nav className={active ? `${style.navegacaoMenu} ${style.active} ${style.menu}` : style.navegacaoMenu}>
              <BtnNavbar active={active} onClick={activeMode} />
              <ListaDeLinks 
              className={active ? `${style.listNavbar} ${style.active}` : style.listNavbar}
              reactive={activeMode}
              />
            </nav>
          </div>
      </header>
      <main>
        <section name="Home" className={style.home}>
          <div className={style.displayHome}>
            <div className={style.home_texts}>
              <h1>Construido um futuro <br/> brilhante <span className={style.textLine}> Ebook</span ></h1>
              <p>Recurso indispensável para pais e filhos que desejam se preparar adequadamente para a iniciação ao primeiro emprego.</p>
              <button className={style.home_btn}><Link 
              to={"Compra"}
              smooth={true} 
              duration={800}
              >Inicie Já</Link></button>
            </div>
            <div className={style.home_imgs}>
              <Svg1Empre className={style.svg1}/>
              <SvgStar className={style.svg2}/>
              <SvgVEri className={style.svg3}/>
              <img className={style.home_imgs_cover} src={imgJovem} alt="Jovem no mercado de trabalho" />
            </div>
          </div>
        </section>
        <section className={style.garantias}>
          <ListaGarantia/>
        </section>
        <section name="Vantagens" className={style.vantagens}>
           <div  className={style.vantagensContainer}>
            <span className={style.vantagensTitle}>Vantagens imperdíveis</span>
            <button><Link 
            to={"Compra"}
            smooth={true} 
            duration={800}
            >Inicie Já</Link></button>
           </div>
           <ListaDeVantagem/> 
        </section>
        <section name="Provas" className={style.prova}>
          <div className={style.display}>
            <h3>Provas reais do nosso produto!</h3>
            <p className={style.descricao}>Depoimentos reais de pessoas que se beneficiaram do eBook Conquiste o Seu Primeiro Emprego.</p>
            <ListaDeProvas/>
          </div>
        </section>
        <section name="Sobre" className={style.sobre}>
          <div className={style.displaySobre}>
            <div className={style.sobreText}>
                <h2>Sobre o nosso produto</h2>
                <p>osso produto é um recurso indispensável e completo para pais e filhos que buscam uma preparação sólida e adequada para a iniciação ao primeiro emprego e ao mercado de trabalho.</p>
                <p> Com a crescente competitividade no mercado de trabalho, é fundamental que jovens estejam bem preparados para dar seus primeiros passos no mundo profissional. Nosso produto 
                  oferece uma abordagem abrangente que engloba todas as etapas do processo de busca pelo primeiro emprego e rumo profissional.</p>
              </div>
              <div className={style.sobreImg}> 
                  <img className={style.sobreImgContent} src={imgSobre} alt="Sobre nossa pagina" />
                  <img className={style.take1} src={teck1} alt="E-book: Construindo um futuro brilhante." />
                  <img className={style.take2} src={teck2} alt="Produtos em promoção." />
                  <img className={style.take3} src={teck3} alt="Voce no mercado de trabalho." />
                  <img className={style.take4}src={teck4} alt="Compra segura." />
            </div>
          </div>
        </section>
        <section name="Perguntas" className={style.perguntas}>
          <div className={style.display}>
            <h4>Perguntas frequentes</h4>
            <ListaDePerguntas/>
          </div>
        </section>
        <section name="Compra" className={style.compra}>
          <div className={style.displayCompra}>
            <div className={style.bnc_text}>
              <span className={style.textEbook}>Ebook</span>
              <h5>construindo um futuro <br/> brilhante!</h5>
              <div className={style.preco_cotainer}>
                <span className={style.promo}>De R$107.00</span>
                <span className={style.preco}>R$37.00</span>
              </div>
              <div className={style.listaBn}>
                <div className={style.listaBn1}>
                  <span><Verificado/> Inclusos todos os beneficios </span>
                  <span><Verificado/> Acesso vitalicio</span>
                </div>
                <div className={style.listaBn2}>
                  <span><Verificado/> Garantia de 7 dias após a compra</span>
                  <span><Verificado/> Sua Compra segura </span>
                </div>
              </div>
              <div className={style.slBtn}>
                <a href="#"><button className={style.btnCompra}>Garanta ja o seu!</button></a>
                <div className={style.containerSl}>
                  <img src={SlImg} alt="Selo de confiança" />
                </div>
              </div>
            </div>
            <div className={style.compraImg}>
              <img src={PrecoPng} alt="Construindo um futuro brilhante preço" />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ScrollTop/>
        <div className={style.display}>
          <div className={style.footer_links}>
            <div className={style.logoFooter}>
                <LogoIcon />
                <span className={style.Logo_footer}>CDCODE</span>
            </div>
            <ListaDeLinks className={active ? `${style.listNavbar} ${style.active}` : style.listNavbar}/>
            <div className={style.LinkTextZap}>
              <Chat/>
              <Link to="#"> Fale conosco</Link>
            </div>
          </div>
          <div className={style.termos}>
            <p>Todos os direitos resevados. <span>@contruindoUmFuturo.com.br</span></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
