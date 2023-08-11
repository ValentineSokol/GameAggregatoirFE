import React from 'react';
import { Buttons } from '@/constants/styles';

export const Button = ({ children, className, disabled, onClick }) => {
    return (
        <button disabled={disabled} className={`${Buttons.default} ${className}`} onClick={onClick}>{children}</button>
    );
}
