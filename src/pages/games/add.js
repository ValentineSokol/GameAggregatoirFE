import React, { useState } from 'react';
import { Input } from '@/components/Input';

import { useGameOffers } from '@/api/useGameOffers';
import {useDebounce} from "../../../utils/useDebounce";

import { OfferCard } from "@/components/OfferCard/OfferCard";
import {Button} from "@/components/Button/Button";

export default function AggregatePage() {
    const [query, setQuery] = useState('');

    const debouncedSetQuery = useDebounce((e) => setQuery(e.target.value));

    const { data: offers, isLoading, isError, ...result } = useGameOffers(query);

    return (
        <main className='w-full flex justify-center align-middle mt-3'>
            <form className='flex flex-col gap-5 w-full mx-4'>
                <Input
                    onChange={debouncedSetQuery}
                    label="Цифровий ключ Steam: "
                    placeholder="Наприклад: 30CFA-WCXEX-MJPJX"
                    wrapClassName='w-full'
                />
                <Input
                    onChange={debouncedSetQuery}
                    label="Посилання Steam-сторінки: "
                    placeholder="https://store.steampowered.com/app/*"
                    wrapClassName='w-full'
                />
                <Button>Додати</Button>
            </form>
        </main>
    );
}
