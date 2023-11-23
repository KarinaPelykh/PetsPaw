import icon from "../../images/sprite.svg";

import css from "./Navigation.module.css";
import { ButtonReaction } from "../ButtonReaction/ButtonReaction";
import { LinkNav } from "../Link/Link";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className={css.wrapper}>
        {!isHomePage && <ButtonReaction />}

        <svg className={css.logo}>
          <use xlinkHref={icon + "#logo"}></use>
        </svg>

        <h1 className={css.title}>Hi!👋</h1>
        <p className={css.text}>Welcome to MacPaw Bootcamp 2023</p>
        <p className={css.texte}>Lets start using The Cat API</p>
        <LinkNav />
      </div>
    </>
  );
};
