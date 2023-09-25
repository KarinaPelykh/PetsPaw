import css from "./BreedsForm.module.css";
import icon from "../../images/sprite.svg";
// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { catImgname, getCatsImagesByBreed } from "../../redux/operation";
import { useState } from "react";

export const BreedsForm = () => {
  const dicpatch = useDispatch();

  const [name, setName] = useState("");

  const handelSumit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    dicpatch(catImgname(name));
    form.reset();
    console.log(name);
  };

  const handelChangeInput = (e) => {
    setName(e.target.value.trim());
  };

  return (
    <>
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
        <button type="submit" className={css.btnSerch}>
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
              <svg style={{ width: "30px", height: "30px" }}>
                <use xlinkHref={icon + "#icon-smail"}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.btn}>
              <svg style={{ width: "30px", height: "26px" }}>
                <use xlinkHref={icon + "#heart"}></use>
              </svg>
            </button>
          </li>
          <li>
            <button className={css.btn}>
              <svg style={{ width: "30px", height: "30px" }}>
                <use xlinkHref={icon + "#sad"}></use>
              </svg>
            </button>
          </li>
        </ul>
      </form>
    </>
  );
};
