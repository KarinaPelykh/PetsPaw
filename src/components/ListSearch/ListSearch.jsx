import { useSelector } from "react-redux";
import { selectorName } from "../../redux/selector";
import css from "./ListSearch.module.css";

export const ListSearch = () => {
  const images = useSelector(selectorName);
  console.log(images);

  return (
    <>
      {images.length === 0 ? (
        <>
          <div className={css.box}>
            <p className={css.text}>
              Oops, we didn`t find anything,
              <br /> enter the first 4 letters of the breed name.
            </p>
            <img
              style={{
                position: "absolute",
                top: "240px",
                left: " 198px",
                width: "200px",
                height: "200px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpc-IGtxvZSt1iSsCyci10D2tZ6WBbWywJw&usqp=CAU"
            />
          </div>
        </>
      ) : (
        <>
          {" "}
          <p className={css.textNAme}>
            Search results for:<b>{}</b>
          </p>
          <ul className={css.listCat}>
            {images.map((item) => (
              <li className={css.itemCAT} key={item.id}>
                <img className={css.ImagesCat} src={item.url} />
              </li>
            ))}
          </ul>
        </>
      )}{" "}
    </>
  );
};
