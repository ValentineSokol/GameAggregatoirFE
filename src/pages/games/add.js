import React, { useState } from 'react';
import { Input } from '@/components/Input';

import {Button} from "@/components/Button/Button";
import {FormLayout} from "@/components/layouts/FormLayout";
import {useAddGame} from "@/api/useAddGame";

export default function AggregatePage() {
    const { mutate } = useAddGame();
    const [key, setKey] = useState('');
    const [url, setUrl] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        mutate({ key, url });
    }

    return (
       <FormLayout>
                <Input
                    onChange={(e) => setKey(e.target.value)}
                    value={key}
                    label="Цифровий ключ Steam: "
                    placeholder="Наприклад: 30CFA-WCXEX-MJPJX"
                    wrapClassName='w-full'
                />
                <Input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    label="Посилання Steam-сторінки: "
                    placeholder="https://store.steampowered.com/app/*"
                    wrapClassName='w-full'
                />
                <Button onClick={onSubmit}>Додати</Button>
       </FormLayout>
    );
}
