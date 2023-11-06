import css from "./BreedsForm.module.css";
import icon from "../../images/sprite.svg";
import { useDispatch } from "react-redux";
import { catImgname } from "../../redux/operation";
import { useState } from "react";
import PropTypes from "prop-types";
import { ButtonReaction } from "../ButtonReaction/ButtonReaction";

export const BreedsForm = ({ toggle, props }) => {
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
    <>
      <div style={{ display: "flex" }}>
        {" "}
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
            <svg className={css.svgSearch}>
              <use xlinkHref={icon + "#icon-search"}></use>
            </svg>
          </button>
        </form>
        <ButtonReaction props={props} />
      </div>
    </>
  );
};
BreedsForm.propTypes = {
  toggle: PropTypes.func,
  props: PropTypes.func,
};
