import React, { useState } from 'react';
import { Input } from '@/components/Input';

import { useGameOffers } from '@/api/useGameOffers';
import {useDebounce} from "../../../utils/useDebounce";

export default function AggregatePage() {
    const [query, setQuery] = useState('');

    const debouncedSetQuery = useDebounce((e) => setQuery(e.target.value));

    const { offers, isLoading, isError } = useGameOffers(query);


    return (
        <main className='w-full flex justify-center align-middle mt-3'>
        <Input
            onChange={debouncedSetQuery}
            label="Шукати пропозиції"
            placeholder="Друкуйте, щоб розпочати пошук"
            wrapClassName='w-1/2'
        />
        </main>
    );
}