import { SelectIages } from "../SelectImages/SelectImages";
import icon from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import css from "./SlaiderCat.module.css";
export const SlaiderCat = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.cont}>
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
          <button type="button" className={css.btnBreeds}>
            BREEDS
          </button>
        </div>
        <SelectIages />
      </div>
    </>
  );
};
