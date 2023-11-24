import { Link } from "react-router-dom";
import css from "./SearchCat.module.css";
import icon from "../../images/sprite.svg";
import { ListSearch } from "../../components/ListSearch/ListSearch";

export const SearchCat = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.cont}>
          <Link className={css.buttonBack} to="/">
            <svg className={css.buttonBackSvg}>
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
