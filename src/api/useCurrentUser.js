import { useQuery } from 'react-query';

import Request from './request';

export const useCurrentUser = () => {
    const result = useQuery(
        {
            queryKey: ['currentUser'],
            queryFn: () => Request.get(`/users/current`),
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );

    return { user: result?.data, ...result };
};
