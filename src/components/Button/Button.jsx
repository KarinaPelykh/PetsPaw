import { Link } from "react-router-dom";
import icon from "../../images/sprite.svg";
import css from "./Button.module.css";
export const Button = () => {
  return (
    <>
      <Link className={css.buttonBack} to="/">
        <svg
          className={css.svgBack}
        
        >
          <use xlinkHref={icon + "#icon-arrow-left"}></use>
        </svg>
      </Link>
    </>
  );
};
