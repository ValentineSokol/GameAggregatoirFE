import React, {useId} from 'react';
import clsx from 'clsx';

export const Input = ({ error, id, label, placeholder, wrapClassName }) => {
    const defaultId = useId();
    const errorId = useId();

    const inputId = id || defaultId;

    return (<div className={wrapClassName}>
            <label htmlFor={inputId} className={clsx(
                'block mb-2 text-sm font-medium',
                error ?
                    'text-red-700 dark:text-red-500'
                    :
                    'text-gray-800'
            )}>{label}</label>
            <input
                aria-describedby={errorId}
                className="rounded-md p-1 w-full"
                id={inputId}
                placeholder={placeholder}
            />
            {error &&
                <span id={errorId} role='alert' className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</span>}
        </div>
    );
};1