import css from "./BreedsForm.module.css";
import icon from "../../images/sprite.svg";
import { useState } from "react";

export const BreedsForm = () => {
  const [query, setQuery] = useState("");
  const handelSumit = (event) => {
    event.preventDefault();
    const nameCat = event.target;
    const name = nameCat.name.value;
    console.log(name);
  };
  const handelChangeInput = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <form onSubmit={handelSumit} className={css.wrapper}>
        <input
          onChange={handelChangeInput}
          className={css.input}
          type="text"
          name="name"
          value={query}
          id="user-name"
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
