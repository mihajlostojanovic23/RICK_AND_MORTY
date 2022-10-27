// Components

import CharactersLists from "./components/CharactersLists/CharactersList";
import CharactersStatus from "./components/CharactersStatus/CharactersStatus";
import Header from "./components/Header/Header";

//Context
import { DataProvider } from "./context/dataContext";

//React Query
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <Header />
          <CharactersStatus />
          <CharactersLists />
        </DataProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
