import { useSelector } from "react-redux";
import { selectorImages } from "../../redux/selector";
import css from "./SelectImages.module.css";
export const SelectIages = () => {
  const images = useSelector(selectorImages);
  console.log(images);
  //   if (images.length === 0) {
  //     return (
  //       <div style={{ marginLeft: "80px", marginTop: "120px" }}>Loading...</div>
  //     );
  //   }
  const imageStyles = [{ width: "520px", marginTop: "20px" }];
  return (
    <div className={css.imgCat}>
      <ul className={css.list}>
        {images.map((item, index) => (
          <li className={css.item} key={item.id}>
            <img
              style={imageStyles[index % imageStyles.length]}
              src={item.url}
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
