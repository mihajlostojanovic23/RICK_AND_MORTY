import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import DataContext from "../../context/dataContext";

const Search: React.FC = () => {
  const set = (e: any) => {
    // Zamena za Debounce
    setTimeout(() => {
      setSearch(e.target.value);
    }, 500);
  };

  const { setSearch } = useContext(DataContext);
  return (
    <>
      <TextField
        onChange={set}
        id="outlined-search"
        label="Search"
        type="search"
      />
    </>
  );
};

export default Search;
