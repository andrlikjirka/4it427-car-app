import {useEffect, useState} from "react";

export default function useFetch(fetchFn, initialData) {
    const [fetchedData, setFetchedData] = useState(initialData);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {

            setIsFetching(true);
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setError({message: error.message || 'Failed to fetch data'})
            }
            setIsFetching(false);
        }
        fetchData();
    }, [fetchFn])

    return {
        fetchedData, setFetchedData, isFetching, error
    };
}