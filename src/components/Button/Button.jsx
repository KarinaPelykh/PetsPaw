import { Link } from "react-router-dom";
import icon from "../../images/sprite.svg";
import css from "./Button.module.css";
export const Button = () => {
  return (
    <>
      <Link className={css.buttonBack} to="/">
        <svg
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            width: "20px",
            height: "20px",
            objectFit: "cover",
          }}
        >
          <use xlinkHref={icon + "#icon-arrow-left"}></use>
        </svg>
      </Link>
    </>
  );
};
