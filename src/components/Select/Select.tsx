import style from "./select.module.scss";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/slices/userSlice";

export const Select = () => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <select className={style.select} name="select" onChange={handleChange}>
      <option className={style.option} value="name">
        Name
      </option>
      <option className={style.option} value="username">
        Username
      </option>
      <option className={style.option} value="email">
        Email
      </option>
      <option className={style.option} value="phone">
        Phone
      </option>
    </select>
  );
};
