import React, { useState } from 'react';
import { Input } from '@/components/Input';

import { useGameOffers } from '@/api/useGameOffers';
import {useDebounce} from "../../../utils/useDebounce";

import { OfferCard } from "@/components/OfferCard/OfferCard";

export default function AggregatePage() {
    const [query, setQuery] = useState('');

    const debouncedSetQuery = useDebounce((e) => setQuery(e.target.value));

    const { data: offers, isLoading, isError, ...result } = useGameOffers(query);

    console.log({ offers, result})
    return (
        <main className='w-full flex justify-center align-middle mt-3'>
        <div className='flex flex-col gap-5 w-full mx-4'>
        <Input
            onChange={debouncedSetQuery}
            label="Шукати пропозиції"
            placeholder="Друкуйте, щоб розпочати пошук"
            wrapClassName='w-full'
        />
         <section>
             <ul className='grid gap-5 grid-rows-3 grid-cols-3'>
             { offers?.map((offer, i) => (
                 <li><OfferCard key={i} {...offer} /></li>
             ))}
             </ul>
         </section>
        </div>
        </main>
    );
}