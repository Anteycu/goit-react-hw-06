import { useSelector } from "react-redux";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchedName = useSelector((state) => state.filters.name);
  return (
    <div className={css.searcher}>
      <h2>Search contact</h2>
      <input value={searchedName} onChange={() => {}} />
    </div>
  );
};

export default SearchBox;
