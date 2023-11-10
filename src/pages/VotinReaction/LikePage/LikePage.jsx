import { useSelector } from "react-redux";
import { BreedsForm } from "../../../components/BreedsForm/BreedsForm";
import { Button } from "../../../components/Button/Button";
import css from "./LikePage.module.css";
import { votinSelector } from "../../../redux/selector";

export const LikePage = () => {
  const like = useSelector(votinSelector);

  return (
    <section className={css.section}>
      <BreedsForm />

      <div className={css.container}>
        <div className={css.cont}>
          <Button />
          <button type="button" className={css.btnBreeds}>
            LIKE
          </button>
        </div>
        <ul className={css.list}>
          {like.map((item) => {
            if (item.value === 1) {
              return (
                <li className={css.list} key={item.id}>
                  <img className={css.images} src={item.image.url} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};
