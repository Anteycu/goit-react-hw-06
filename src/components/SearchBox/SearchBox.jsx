import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/actions";

const SearchBox = () => {
  const searchedName = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = ({ currentTarget }) => {
    dispatch(setFilter(currentTarget.value));
  };

  return (
    <div className={css.searcher}>
      <h2>Search contact</h2>
      <input value={searchedName} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
