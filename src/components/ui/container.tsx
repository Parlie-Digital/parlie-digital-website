import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Container = ({ className, ...props }:ContainerProps) => {
    return (
        <div
            className={clsx(
                'mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8',
                className
            )}
            {...props}
        />
    );
};
