import css from "./BreedsForm.module.css";
import icon from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { catImgname } from "../../redux/operation";
import { useState } from "react";
import PropTypes from "prop-types";

export const BreedsForm = ({ toggle }) => {
  const dicpatch = useDispatch();

  const [name, setBreed_ids] = useState("");
  const handelSumit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    console.log(name);
    dicpatch(catImgname(name));
    setBreed_ids("");
  };

  const handelChangeInput = (e) => {
    setBreed_ids(e.target.value.trim());
  };

  return (
    <div>
      <form onSubmit={handelSumit} className={css.wrapper}>
        <input
          onChange={handelChangeInput}
          className={css.input}
          type="name"
          name="name"
          value={name}
          id="cat-name"
          placeholder="Search for breeds by name"
        />
        <button
          onClick={toggle}
          disabled={name === ""}
          type="submit"
          className={css.btnSerch}
        >
          <svg
            style={{
              width: "20px",
              height: "20px",
            }}
          >
            <use xlinkHref={icon + "#icon-search"}></use>
          </svg>
        </button>

        <ul className={css.list}>
          <li>
            <button className={css.btn}>
              <svg className={css.svgSmile}>
                <use xlinkHref={icon + "#smile"}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.btn}>
              <svg className={css.svgHeart}>
                <use xlinkHref={icon + "#heart"}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.btn}>
              <svg className={css.svgSad}>
                <use xlinkHref={icon + "#sad"}></use>
              </svg>
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};
BreedsForm.propTypes = {
  toggle: PropTypes.func,
};
