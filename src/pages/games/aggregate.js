import React from 'react';
import {Input} from "@/components/Input";

export default function AggregatePage() {
    return (
        <main className='w-full flex justify-center align-middle mt-3'>
        <Input
            label="Шукати пропозиції"
            placeholder="Друкуйте, щоб розпочати пошук"
            wrapClassName='w-1/2'
        />
        </main>
    );
}