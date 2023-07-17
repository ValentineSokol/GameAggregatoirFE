import { useQuery } from 'react-query';

import Request from './request';

export const useGameOffers = (query) => {
    const result = useQuery(
        {
            queryKey: ['gameOffers', query],
            queryFn: () => Request.get(`/games/offers/${query}`),
            enabled: !!query,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    return { offers: result?.data, ...result };
};