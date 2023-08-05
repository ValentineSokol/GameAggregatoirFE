import React, {useState} from 'react';
import {Input} from "@/components/Input";
import {Button} from "@/components/Button/Button";
import {FormLayout} from "@/components/layouts/FormLayout";
import { useLocalAuth } from "@/api/useLocalAuth";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { mutate, isLoading, isError, error } = useLocalAuth();

    const onSubmit = (e) => {
        e.preventDefault();
        mutate({ username, password });
    }
    return (
        <FormLayout>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} label='Псевдонім'/>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' label='Пароль'/>
            <Button disabled={isLoading} onClick={onSubmit}>Вперед</Button>

            { isError &&
            <span role="alert" className="text-red-900 font-bold">
                {error?.message ?? 'Сталася помилка під час виконання операції'}
            </span>
            }
        </FormLayout>
    )
}
