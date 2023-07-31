import destaque from "../../assets/melho.png";
import team from "../../assets/col.png";
import aume from "../../assets/aume.png";

import style from './style.module.scss';

const Lista = [
    {svg: team,  nomeItem: "Consiga a sua vaga ", descricao: "Conquiste sua vaga! Nosso eBook é ideal para quem busca o primeiro emprego e deseja se destacar na concorrência.",},
    {svg: destaque,  nomeItem: "Destaque-se", descricao: "Destaque-se desde o início com dicas estratégicas e informações valiosas sobre o primeiro emprego e o mercado de trabalho.",},
    {svg: aume,  nomeItem: "Aumente suas chances ", descricao: "Aumente suas chances de sucesso no mercado de trabalho com insights valiosos sobre currículos, estratégias e muito mais.",},
]
 
const ListaDeVantagem = () => {
    return (
      <ul className={style.ListaDeBeneficio}>
        {Lista.map((item, indice) => {
          return (
            <li key={indice}>
              <div>
                <img src={item.svg} alt={item.nomeItem} />
              </div>
              <div className={style.ListaText}>
                <span className={style.textInfo}>{item.nomeItem}</span>
                <p>{item.descricao}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

export default ListaDeVantagem;