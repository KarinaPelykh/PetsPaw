import css from "./ButtonReaction.module.css";
import icon from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const ButtonReaction = ({ props }) => {
  return (
    <>
      <div>
        <ul className={css.list}>
          <li>
            <Link to="smile">
              <button onClick={props} className={css.btn}>
                <svg className={css.svgSmile}>
                  <use xlinkHref={icon + "#smile"}></use>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link to="heart">
              <button onClick={props} className={css.btn}>
                <svg className={css.svgHeart}>
                  <use xlinkHref={icon + "#heart"}></use>
                </svg>
              </button>
            </Link>
          </li>
          <li>
            <Link to="sad">
              <button onClick={props} className={css.btn}>
                <svg className={css.svgSad}>
                  <use xlinkHref={icon + "#sad"}></use>
                </svg>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
ButtonReaction.propTypes = {
  props: PropTypes.func,
};
