import { Button } from "../../../components/Button/Button";
import css from "./LikePage.module.css";
export const LikePage = () => {
  return (
    <div className={css.container}>
      <div className={css.cont}>
        <Button />
        <button type="button" className={css.btnBreeds}>
          LIKE
        </button>
      </div>
    </div>
  );
};
