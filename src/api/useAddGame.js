import { useMutation } from 'react-query';

import Request from './request';

export const useAddGame = () => {
    const result = useMutation(
        {
            mutationKey: ['addGame'],
            mutationFn: (payload) => Request.post('/games', payload),
        }
    );

    return result;
};
