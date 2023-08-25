import { useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";
import css from "./Select.module.css";
export const Select = () => {
  const breeds = useSelector(selectorBreeds);
  const handelFilterImgName = (event) => {
    const filterName = event.target.value;
    console.log(filterName);
  };
  return (
    <select onChange={handelFilterImgName} className={css.select}>
      <option selected>All breeds</option>
      {breeds.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
