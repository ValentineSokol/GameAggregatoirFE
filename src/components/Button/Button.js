import React from 'react';
import { Buttons } from '@/constants/styles';

export const Button = ({ children, className, disabled, onClick, href }) => {
    const Base = href ? 'a' : 'button';
    return (
        <Base
            href={href}
            target='__blank'
            noopener
            noreferer
            disabled={disabled}
            className={`${Buttons.default} ${className}`}
            onClick={onClick}
        >
            {children}
        </Base>
    );
}
