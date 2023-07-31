import { Link } from "react-scroll";

const ListaDeLinks = () => {
  const Lista = ["Home", "Vantagens", "Provas", "Sobre", "Perguntas"];

  return (
    <ul>
      {Lista.map((item, index) => (
        <li key={index}>
          <Link 
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
