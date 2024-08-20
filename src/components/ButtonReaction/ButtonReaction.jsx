import css from "./ButtonReaction.module.css";
import icon from "../../images/sprite.svg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
export const ButtonReaction = () => {
  return (
    <div className={css.wrap}>
      <div className={css.box}>
        <ul className={css.list}>
          <li>
            <NavLink to="/smile" className={css.btn}>
              <svg className={css.svgSmile}>
                <use xlinkHref={icon + "#smile"}></use>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/heart" className={css.btn}>
              <svg className={css.svgHeart}>
                <use xlinkHref={icon + "#heart"}></use>
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sad" className={css.btn}>
              <svg className={css.svgSad}>
                <use xlinkHref={icon + "#sad"}></use>
              </svg>
            </NavLink>
          </li>
        </ul>{" "}
      </div>{" "}
    </div>
  );
};
ButtonReaction.propTypes = {
  props: PropTypes.func,
};
