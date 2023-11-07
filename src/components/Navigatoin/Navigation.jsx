import { NavLink } from "react-router-dom";
import icon from "../../images/sprite.svg";
import cat from "../../images/cat.png";
import phone from "../../images/phone.png";
import table from "../../images/table.png";
import css from "./Navigation.module.css";
import { ButtonReaction } from "../ButtonReaction/ButtonReaction";

export const Navigation = () => {
  return (
    <>
      <div className={css.wrapper}>
        <ButtonReaction />
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

            <NavLink className={css.buttons} to="/voting">
              VOTING
            </NavLink>
          </li>
          <li className={css.item}>
            <div className={css.containerIm}>
              <img className={css.imagesCat} src={cat} alt="Cat" />
            </div>
            <NavLink className={css.buttons} to="/breeds">
              BREEDS
            </NavLink>
          </li>
          <li className={css.item}>
            <div className={css.containerImPhone}>
              <img className={css.imagesPhone} src={phone} alt="phone" />
            </div>
            <NavLink className={css.buttons} to="/gallery">
              GALLERY
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
