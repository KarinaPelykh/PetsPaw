import { LinkNav } from "../Link/Link";
import css from "./BurgerMenu.module.css";
import icon from "../../images/sprite.svg";
import PropTypes from "prop-types";

export const BurgerMenu = ({ props }) => {
  return (
    <div className={css.wraper}>
      <button className={css.butClose} onClick={props}>
        <svg className={css.closeSvg}>
          <use xlinkHref={icon + "#icon-Close"}></use>
        </svg>
      </button>
      <div className={css.thumb}>
        <LinkNav />
      </div>
    </div>
  );
};
BurgerMenu.propTypes = {
  props: PropTypes.func,
};
