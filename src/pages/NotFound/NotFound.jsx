import css from "./NotFound.module.css";
import cat from "../../images/pngwing.png";
export const NotFond = () => {
  return (
    <div className={css.wraper}>
      <div className={css.thumb}>
        <p className={css.text}>Not Found page</p>
        <img src={cat} className={css.images} />
      </div>
    </div>
  );
};
// export default NotFond;
