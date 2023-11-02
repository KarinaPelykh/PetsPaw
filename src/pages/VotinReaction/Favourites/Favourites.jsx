import { Button } from "../../../components/Button/Button";
import css from "./FAvourites.module.css";

export const Favourites = () => {
  return (
    <div className={css.container}>
      <div className={css.cont}>
        <Button />
        <button type="button" className={css.btnBreeds}>
          FAVOURITES
        </button>
      </div>
    </div>
  );
};
