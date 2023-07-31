
import Bene01 from '../svgs/Beneficios/Bene-01';
import Bene02 from '../svgs/Beneficios/Bene-02';
import Bene03 from '../svgs/Beneficios/Bene-03';
import Bene04 from '../svgs/Beneficios/Bene-04';
import Bene05 from '../svgs/Beneficios/Bene-05';

import style from "./style.module.scss";

const ListaBeneficio = () => {

    const ListaDeBeneficio = 
    [
        { 
            img: <Bene01/>, text: "Seu curriculo perfeito, 10+ modelos"
        },
        { 
            img: <Bene02/>, text: "Seu curriculo perfeito, 10+ modelos"
        },
        { 
            img: <Bene03/>, text: "Seu curriculo perfeito, 10+ modelos"
        },
        { 
            img: <Bene04/>, text: "Seu curriculo perfeito, 10+ modelos"
        },
        { 
            img: <Bene05/>, text: "Seu curriculo perfeito, 10+ modelos"
        },
    ]

    return (
        <ul className={style.listaBene}>
          {ListaDeBeneficio.map((item, indice) => {
            return (
                <li key={indice}>{item.img} {item.text}</li>
            );
          })}
        </ul>
      );
    };


export default ListaBeneficio;