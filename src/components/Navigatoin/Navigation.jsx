import icon from "../../images/sprite.svg";

import css from "./Navigation.module.css";
import { LinkNav } from "../Link/Link";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [size, setSize] = useState(window.innerWidth);
  const handelWidth = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handelWidth);
    return () => {
      window.addEventListener("resize", handelWidth);
    };
  }, []);

  return (
    <>
      {size < 1439 && !isHomePage ? null : (
        <div className={css.wrapper}>
          <svg className={css.logo}>
            <use xlinkHref={icon + "#logo"}></use>
          </svg>

          <h1 className={css.title}>Hi!👋</h1>
          <p className={css.text}>Welcome to MacPaw Bootcamp 2023</p>
          <p className={css.texte}>Lets start using The Cat API</p>
          <LinkNav />
        </div>
      )}
    </>
  );
};
