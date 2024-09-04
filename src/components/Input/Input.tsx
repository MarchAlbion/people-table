import { useState } from "react";
import style from "./input.module.scss";

import { setSearch } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export const Input = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(setSearch(e.target.value.trimStart()));
  };
  return (
    <input
      placeholder="Search"
      onChange={handleChange}
      className={style.input}
      value={value}
    ></input>
  );
};
