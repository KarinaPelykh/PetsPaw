import css from "./Home.module.css";
import girl from "../../images/girl.png";
export const HomePage = () => {
  return (
    <>
      <section className={css.sectionHome}>
        <div className={css.wrap}>
          <img className={css.imgHome} src={girl} alt="Girl" />
          <div className={css.containerGallry}> </div>
        </div>
      </section>
    </>
  );
};
// export default HomePage;
