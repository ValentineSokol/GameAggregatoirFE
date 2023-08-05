import React from 'react';

export const FormLayout = ({ children }) => (
    <main className='w-full flex justify-center align-middle mt-3'>
        <form className='flex flex-col gap-5 w-full mx-4'>
            {children}
        </form>
    </main>
)
