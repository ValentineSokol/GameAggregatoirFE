import { useMutation } from 'react-query';

import Request from './request';

export const useClaimGame = (id) => {
    const result = useMutation(
        {
            mutationKey: ['claimGame'],
            mutationFn: () => Request.post(`/games/${id}/claim`),
        }
    );

    return result;
};
