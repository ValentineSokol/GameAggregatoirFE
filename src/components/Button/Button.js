import React from 'react';
import { Buttons } from '@/constants/styles';

export const Button = ({ children, onClick }) => {
    return (
        <button className={Buttons.default} onClick={onClick}>{children}</button>
    );
}
