import { createContext, Dispatch, SetStateAction, useState } from "react";

// Todo: sta znaci ovaj Dispatch
interface IDataValueContext {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data: object;
  setData: Dispatch<SetStateAction<never[]>>;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
}

const DataContext = createContext<IDataValueContext>({
  setData: () => null,
  setStatus: () => null,
  search: "",
  data: [],
  status: "",
  setSearch: () => null,
});

export const DataProvider = ({ children }: any) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");

  return (
    <div>
      <DataContext.Provider
        value={{ search, setSearch, data, setData, status, setStatus }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default DataContext;
