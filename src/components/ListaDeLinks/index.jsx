/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

import "../../styles/globals.module.scss";

const ListaDeLinks = (props) => {
  const Lista = ["Home", "Vantagens", "Provas", "Sobre", "Perguntas"];

  return (
    <ul className={props.className}>
      {Lista.map((item, index) => (
        <li key={index}>
          <Link
          onClick={props.reactive} 
          to={item} 
          smooth={true} 
          duration={800}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeLinks;
