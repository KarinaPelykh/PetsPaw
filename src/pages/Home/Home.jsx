import icon from "../../images/sprite.svg";
import cat from "../../images/cat.png";
import phone from "../../images/phone.png";
import table from "../../images/table.png";
import css from "./Home.module.css";
import girl from "../../images/girl.png";
export const HomePage = () => {
  return (
    <>
      <section
        // style={{
        //   position: "reletiv",
        // }}
        className={css.containerHome}
      >
        <div className={css.wrapper}>
          <svg className={css.logo}>
            <use xlinkHref={icon + "#logo"}></use>
          </svg>
          <h1 className={css.title}>Hi!👋</h1>
          <p className={css.text}>Welcome to MacPaw Bootcamp 2023</p>
          <p className={css.texte}>Lets start using The Cat API</p>
          <ul className={css.list}>
            <li className={css.item}>
              <div className={css.containerImTabl}>
                <img className={css.imagesTable} src={table} alt="table" />
              </div>

              <button className={css.buttons}>VOTING</button>
            </li>
            <li className={css.item}>
              <div className={css.containerIm}>
                <img className={css.imagesCat} src={cat} alt="Cat" />
              </div>
              <button className={css.buttons}>BREEDS</button>
            </li>
            <li className={css.item}>
              <div className={css.containerImPhone}>
                <img className={css.imagesPhone} src={phone} alt="phone" />
              </div>
              <button className={css.buttons}>GALLERY</button>
            </li>
          </ul>
        </div>
        <section
          style={{
            position: "relative",
            zIndex: "3",
            marginLeft: "40px",
          }}
        >
          <img
            style={{
              position: "absolute",
              left: "28px",
              // left: "650px",
              top: "-30px",
            }}
            src={girl}
            alt="Girl"
          />
          <div className={css.containerGallry}></div>
        </section>
      </section>
    </>
  );
};
