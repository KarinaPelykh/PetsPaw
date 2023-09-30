import { Link } from "react-router-dom";
import css from "./SearchCat.module.css";
import icon from "../../images/sprite.svg";
import { ListSearch } from "../ListSearch/ListSearch";
// import { useState } from "react";

// import { NameCat } from "../NameCat/NameCat";
export const SearchCat = () => {
  // const [open, setOpen] = useState(false);

  // const hendelTextv = () => {

  //   setOpen(!setOpen);
  // };

  return (
    <section className={css.section}>
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
            Search
          </button>
        </div>
        <ListSearch />
      </div>
    </section>
  );
};
