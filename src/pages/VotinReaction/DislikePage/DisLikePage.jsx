import { useSelector } from "react-redux";
import { BreedsForm } from "../../../components/BreedsForm/BreedsForm";
import { Button } from "../../../components/Button/Button";
import css from "./DislikePage.module.css";
import { votinSelector } from "../../../redux/selector";

export const DislikePage = () => {
  const dislike = useSelector(votinSelector);
  return (
    <div className={css.section}>
      <BreedsForm />

      <div className={css.container}>
        <div className={css.cont}>
          <Button />
          <button type="button" className={css.btnBreeds}>
            DISLIKES
          </button>
        </div>
        <ul className={css.list}>
          {dislike.map((item) => {
            if (item.value === -1) {
              return (
                <li className={css.item} key={item.id}>
                  <img src={item.image.url} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
