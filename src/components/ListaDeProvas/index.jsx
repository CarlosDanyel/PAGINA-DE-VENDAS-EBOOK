import CapaPerfil from "../../assets/perfil.png";

import Style from "./style.module.scss";

const ListaPerfil = 
    [
        {
            img: CapaPerfil,
            nome: "João Silva", 
            cargo: "Estudante de Direito", 
            descricao: '"  Suas dicas e orientações foram fundamentais para me preparar para o mercado de trabalho. Com a ajuda do eBook, consegui me destacar entre os candidatos e conquistar o meu tão sonhado primeiro emprego em uma empresa de prestígio.  "'
        },
        {
            img: CapaPerfil,
            nome: "Maria Santos", 
            cargo: "Estudante do Ensíno médio", 
            descricao: '" Eu estava perdido e inseguro sobre como começar minha carreira profissional, mas o eBook me deu uma visão clara sobre o que os empregadores procuram e como me destacar na busca pelo primeiro emprego no mercado de trabalho."'
        },
        {
            img: CapaPerfil,
            nome: "Amanda Oliveira", 
            cargo: "Estudante de Administração", 
            descricao: '"Como estudante universitária em busca do meu primeiro emprego, estava insegura e incerta sobre como começar minha carreira profissional. No entanto, ao seguir as estratégias e conselhos do eBook, adquiri mais confiança em minhas habilidades e meus pontos fortes."'
        },
    ]

const ListaDeProvas = () => {
    return (
        <ul className={Style.ListaDeProva}>
          {ListaPerfil.map((item, indice) => {
            return (
              <li key={indice}>
                <p className={Style.descricaoPerfil}>{item.descricao}</p>
                <div className={Style.container}>
                  <div className={Style.imgPerfil}>
                    <img src={item.img} alt={item.nome} />
                  </div>
                  <div className={Style.ListaName}>
                    <span className={Style.Perfilnome}>{item.nome}</span>
                    <p className={Style.cargo}>{item.cargo}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    };

export default ListaDeProvas;