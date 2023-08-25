import { Link } from "react-router-dom";
import icon from "../../images/sprite.svg";
import css from "./Voting.module.css";
import { useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";
export const Voting = () => {
  const beeds = useSelector(selectorBreeds);
  console.log(beeds);
  return (
    <section className={css.section}>
      <form className={css.wrapper}>
        <input
          className={css.input}
          type="text"
          name="name"
          id="user-name"
          placeholder="Search for breeds by name"
        />

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
      <div className={css.container}>
        <div className={css.cont}>
          <button type="button" className={css.buttonBack}>
            <Link to="/">
              <svg
                style={{ width: "20px", height: "20px", objectFit: "cover" }}
              >
                <use xlinkHref={icon + "#icon-arrow-left"}></use>
              </svg>
            </Link>
          </button>
          <button type="button" className={css.btnBreeds}>
            VOTING
          </button>
        </div>

        <div className={css.imgCat}>
          <img
            style={{ margin: "auto", width: "400px", height: "300px" }}
            src={beeds.url}
            alt={beeds.name}
          />
        </div>
      </div>
    </section>
  );
};
