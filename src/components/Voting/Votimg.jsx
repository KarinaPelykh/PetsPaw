import icon from "../../images/sprite.svg";
import css from "./Voting.module.css";
export const Voting = () => {
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
            <svg style={{ width: "20px", height: "20px" }}>
              <use xlinkHref={icon + "#icon-arrow-left"}></use>
            </svg>
          </button>
          <button type="button" className={css.btnBreeds}>
            VOTING
          </button>
        </div>

        <div className={css.imgCat}>
          <img
            style={{ margin: "auto", width: "400px" }}
            src="https://www.svgrepo.com/show/481277/cat-1.svg"
          />
        </div>
      </div>
    </section>
  );
};
