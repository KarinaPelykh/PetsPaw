import icon from "../../images/sprite.svg";

import css from "./Navigation.module.css";
import { ButtonReaction } from "../ButtonReaction/ButtonReaction";
import { useState } from "react";
import { LinkNav } from "../Link/Link";

export const Navigation = () => {
  // const [open] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const hendelIsOpen = () => {
    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className={css.wrapper}>
        {isOpen && <ButtonReaction />}

        <svg className={css.logo}>
          <use xlinkHref={icon + "#logo"}></use>
        </svg>
        <h1 className={css.title}>Hi!👋</h1>
        <p className={css.text}>Welcome to MacPaw Bootcamp 2023</p>
        <p className={css.texte}>Lets start using The Cat API</p>

        <LinkNav hendelIsOpen={hendelIsOpen} />
      </div>
    </>
  );
};
