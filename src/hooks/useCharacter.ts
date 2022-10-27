import { useContext, useEffect } from "react";
import { useInfiniteQuery } from "react-query";

import DataContext from "../context/dataContext";

/*interface IData {
  id: number;
  name: string;
  status: string;
  image: string;
} */

const useCharactersLists = (url: string) => {
  const { search, status } = useContext(DataContext);

  const fetchCharacters = async (
    pageParam = 1,
    searchParam: any,
    statusParam: any
  ) => {
    const query = `${url}character/?page=${pageParam}
      ${searchParam !== " " ? `&name=${searchParam}` : ``}&${
      statusParam !== " " ? `status=${statusParam}` : ``
    }`;
    const response = await fetch(query);
    return response.json();
  };

  const {
    data: Data,
    status: Status,
    hasNextPage,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ["characters", search, status],
    (queryContext) => fetchCharacters(queryContext.pageParam, search, status),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (allPages.length < allPages[0]?.info.pages) {
          return allPages.length + 1;
        }
        return undefined;
      },
    }
  );

  useEffect(() => {
    const onScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;

      if (!isFetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (hasNextPage) {
          fetchNextPage();
        }
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetching]);
  return { Data, Status };
};

export default useCharactersLists;
