import { useDispatch, useSelector } from "react-redux";
import { selectorBreeds } from "../../redux/selector";
import css from "./Select.module.css";
import { getCatsImagesByBreed, infoCat } from "../../redux/operation";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
export const Select = ({ onChange }) => {
  const breeds = useSelector(selectorBreeds);

  const [breeds_id, setBreed_Id] = useState(" ");

  const handelFilterImgName = (event) => {
    const breeds_id = event.target.value;
    setBreed_Id(breeds_id);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(infoCat(breeds_id));

    dispatch(getCatsImagesByBreed(breeds_id));
  }, [dispatch, breeds_id]);

  return (
    <select
      onChange={onChange}
      onClick={handelFilterImgName}
      className={css.select}
    >
      <option selected>All breeds</option>
      {breeds.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
Select.propTypes = {
  onChange: PropTypes.func,
};
