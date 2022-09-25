import { useCallback, useEffect, useState } from 'react';
import useCacheOnReload from '@src/hooks/useCacheOnReload';
import useGetLegacyItems from '@src/hooks/useGetLegacyItems';
import useInfiniteScrolling from '@src/hooks/useInfiniteScrolling';
import Item from '@src/components/item';

export const InfiniteScrolling = () => {
    const [clickedItemsIds, setClickedItemIds] = useState<number[]>([]);
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetLegacyItems();
    const { getCachedData } = useCacheOnReload('clickedItems', clickedItemsIds);

    const shouldUpdate = () => !isLoading && hasNextPage;

    const { loadRef } = useInfiniteScrolling(fetchNextPage, shouldUpdate);

    useEffect(() => {
        const cachedClicks = getCachedData();

        if (cachedClicks.length > 0) {
            setClickedItemIds(cachedClicks);
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addClickedItem = useCallback((itemId: number, isRemove: boolean) => {
        if (isRemove) {
            setClickedItemIds((prevState) =>
                prevState.filter((clickedItemId) => clickedItemId !== itemId)
            );
        } else {
            setClickedItemIds((prevState) => [...prevState, itemId]);
        }
    }, []);

    return (
        <div
            className='flex h-screen w-screen flex-wrap justify-evenly gap-4 overflow-x-hidden overflow-y-scroll bg-scrollBackground'
            data-testid='infinite-scroller'
        >
            {data?.pages.map((appliance) =>
                appliance.data.map((item) => {
                    const clicked =
                        clickedItemsIds.find(
                            (clickedItem) => item.absIdx === clickedItem
                        ) !== undefined;
                    return (
                        <Item
                            key={item.uid}
                            clicked={clicked}
                            label={item.brand}
                            onClick={addClickedItem}
                            equipment={item.equipment}
                            id={item.uid}
                            absIndex={item.absIdx}
                        />
                    );
                })
            )}
            <div ref={loadRef} className={'block h-5 w-full'} />
        </div>
    );
};

export default InfiniteScrolling;
