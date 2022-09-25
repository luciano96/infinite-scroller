import { trpc } from "@src/utils/trpc";

/**
 * With this hook we are able to fetch data from the legacy api.
 *
 * @param {number} currentPage the page to fetch
 * @returns the data from api and if its loading
 */
const useGetLegacyItems = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    trpc.useInfiniteQuery(["appliances.getAppliances", {}], {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10,
      getNextPageParam: (lastPage) =>
        lastPage.cursor === 10 ? false : lastPage.cursor + 1,
    });

  return {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
  };
};

export default useGetLegacyItems;
