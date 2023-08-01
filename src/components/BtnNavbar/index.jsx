
import style from "../../styles/globals.module.scss";

// eslint-disable-next-line react/prop-types
const BtnNavbar = ({ active, onClick }) => {
  return (
    <button
      type="button"
      title="Entra no MenuNavbar"
      onClick={onClick}
      className={active ? `${style.hambuger} ${style.active}` : style.hambuger}
    >
      <span className={style.line}></span>
      <span className={style.line}></span>
    </button>
  );
};

export default BtnNavbar;