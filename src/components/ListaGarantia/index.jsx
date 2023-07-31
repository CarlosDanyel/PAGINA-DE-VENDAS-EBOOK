import Acesso from '../svgs/Acesso';
import Compra from '../svgs/Compra';
import Privacidade from '../svgs/Privacidade';
import Sastifacao from '../svgs/Satisfacao';
import style from './style.module.scss';

const Lista = [
    {svg:<Acesso/>,  nomeItem: "Compra segura ", descricao: "Compra segura é nossa prioridade",},
    {svg:<Compra/>,  nomeItem: "Acesso vitalicio", descricao: "Acesso vitalício exclusivo para você",}, 
    {svg:<Privacidade/>,  nomeItem: "Satisfação garantida", descricao: "Os melhores sempre à sua disposição",},
    {svg:<Sastifacao/>,  nomeItem: "Privacidade segura", descricao: "Proteção total da sua privacidade",},
]
 
const ListaGarantia = () => {
    return (
      <ul className={style.listaGarantia}>
        {Lista.map((item, indice) => {
          return (
            <li key={indice}>
              {item.svg}
              <div>
                <h3>{item.nomeItem}</h3>
                <p>{item.descricao}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

export default ListaGarantia;