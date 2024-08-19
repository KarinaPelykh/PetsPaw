import css from "./Breeds.module.css";
import { useEffect, useState } from "react";
import { getImages } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { BreedaaImeges } from "../../components/BreedaaImeges/BreeadImeges";
import { Select } from "../../components/Select/Select";
import { BreedsForm } from "../../components/BreedsForm/BreedsForm";
import { SlaiderCat } from "../../components/SlaiderCat/SlaiderCat";
import { SortCat } from "../../components/SortCat/SortCat";
import { SearchCat } from "../SearchCat/SearchCat";
import { Button } from "../../components/Button/Button";

export const Breeds = () => {
  const [limit, setLimit] = useState(10);
  const [showSliderCat, setShowSliderCat] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [order, setOrder] = useState("ASC");
  const [openComp, setOpenComp] = useState(false);

  const toggle = () => {
    if (!openComp) {
      setOpenComp(!openComp);
    }
  };

  const handelChangeSelect = (value) => {
    setShowSliderCat(true);
    setSelectedValue(value);
  };

  const hendelImgChange = (event) => {
    const imgChanges = event.target.value;
    setLimit(imgChanges);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages({ limit, order }));
  }, [dispatch, limit, order]);

  const asc = () => {
    setOrder("ASC");
  };

  const desc = () => {
    setOrder("DESC");
  };
  return (
    <section className={css.section}>
      <BreedsForm toggle={toggle} />
      <div>
        {openComp ? (
          <SearchCat />
        ) : (
          <div className={css.container}>
            <div className={css.cont}>
              <div style={{ display: "flex" }}>
                <Button />
                <button type="button" className={css.btnBreeds}>
                  BREEDS
                </button>
              </div>
              <div>
                <Select onChange={handelChangeSelect} />
              </div>

              <div style={{ display: "flex" }}>
                <select
                  onChange={hendelImgChange}
                  defaultValue="10"
                  className={css.selectLimit}
                >
                  <option className={css.optionLimit} value="5">
                    Limit:5
                  </option>
                  <option className={css.optionLimit} value="10">
                    Limit:10
                  </option>
                  <option className={css.optionLimit} value="15">
                    Limit:15
                  </option>
                  <option className={css.optionLimit} value="20">
                    Limit:20
                  </option>
                </select>
                <SortCat asc={asc} desc={desc} />
              </div>
            </div>

            {selectedValue && showSliderCat ? (
              <SlaiderCat />
            ) : (
              <BreedaaImeges />
            )}
          </div>
        )}
      </div>
    </section>
  );
};
