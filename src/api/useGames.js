import { useQuery } from 'react-query';

import Request from './request';

export const useGames = () => {
    const result = useQuery(
        {
            queryKey: ['games'],
            queryFn: () => Request.get(`/games`),
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    return { games: result?.data, ...result };
};
