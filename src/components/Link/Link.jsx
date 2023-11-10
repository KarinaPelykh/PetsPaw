import { NavLink } from "react-router-dom";
import cat from "../../images/cat.png";
import phone from "../../images/phone.png";
import table from "../../images/table.png";
import css from "./Link.module.css";
export const LinkNav = () => {
  return (
    <>
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
    </>
  );
};
