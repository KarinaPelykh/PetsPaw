import { BreedsForm } from "../../../components/BreedsForm/BreedsForm";
import { Button } from "../../../components/Button/Button";
import css from "./DislikePage.module.css";
export const DislikePage = () => {
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
      </div>
    </div>
  );
};
