import React from 'react';
import { Buttons } from '@/constants/styles';

export const Button = ({ children, className, onClick }) => {
    return (
        <button className={`${Buttons.default} ${className}`} onClick={onClick}>{children}</button>
    );
}
