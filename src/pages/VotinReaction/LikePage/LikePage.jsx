import { BreedsForm } from "../../../components/BreedsForm/BreedsForm";
import { Button } from "../../../components/Button/Button";
import css from "./LikePage.module.css";
export const LikePage = () => {
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
      </div>
    </section>
  );
};
