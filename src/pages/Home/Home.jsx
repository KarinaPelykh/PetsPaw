import css from "./Home.module.css";
import girl from "../../images/girl.png";
export const HomePage = () => {
  return (
    <>
      <section className={css.sectionHome}>
        <img className={css.imgHome} src={girl} alt="Girl" />
        <div className={css.containerGallry}></div>
      </section>
    </>
  );
};
