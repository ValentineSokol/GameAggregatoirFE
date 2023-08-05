import { useMutation } from 'react-query';

import Request from './request';

export const useLocalAuth = () => {
    const result = useMutation(
        {
            mutationKey: ['auth'],
            mutationFn: (credentials) => Request.post(`/users`, credentials)
        }
    );

    return result;
};
