import { useQuery } from 'react-query';

import Request from './request';

export const useMyKeys = () => {
    const result = useQuery(
        {
            queryKey: ['keys'],
            queryFn: () => Request.get(`/games/my-keys`),
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    return { keys: result?.data, ...result };
};
