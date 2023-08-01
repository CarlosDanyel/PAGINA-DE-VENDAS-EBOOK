import topBtn from "../../assets/top.png"

import style from "./style.module.scss";

import { animateScroll as scroll } from "react-scroll";

const ScrollTop = () => {
    return (
        <button 
        className={style.BtnTop}
        onClick={()=> {scroll.scrollToTop()}}
        >
          <img src={topBtn} />
        </button>
    );
};

export default ScrollTop;