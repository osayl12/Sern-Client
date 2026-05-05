import {useQuery} from "@tanstack/react-query";
import {GetAllLangs} from "./apiLang";

function useGetLangs() {
    const query = useQuery({
        queryKey: ['allLangs'],
        queryFn: () => GetAllLangs(),
        staleTime: 5 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 5 * 60 * 1000, // Keep data in cache for 20 minutes
        retry: (failureCount, error) => {
            return failureCount < 3;
        }
    });
    return query;
}

export {useGetLangs};