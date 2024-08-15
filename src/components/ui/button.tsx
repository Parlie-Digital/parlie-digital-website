import Link from 'next/link';
import clsx from 'clsx';
import { Url } from 'next/dist/shared/lib/router/router';


// Changes and Optimizations:
//    1.  variantStyles Object:
//
//     Typed as const: This ensures that the keys (primary, secondary, primaryOnDark) are treated as literals, which helps TypeScript infer the types more accurately.
//     Variant Type:
//
//   2.  Union Type: Created a union type Variant based on the keys of the variantStyles object, ensuring that only valid variants can be used (primary, secondary, primaryOnDark).
//   3. ButtonProps Interface:
//
//     Optional variant: The variant prop is typed as Variant, ensuring it can only be one of the valid variants.
//     Optional href: The href prop is typed as Url, matching the expected type from next/link.
//     Optional className: The className prop is typed as string.
//     Combined Type for Props:
//
// React.FC: The Button component is typed using React.FC, and the props are extended with React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> to handle all standard HTML attributes for anchor and button elements.
//     Conditional Rendering: The component returns either a Link or button based on the presence of the href prop.




const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'text-slate-900 shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 hover:bg-slate-200/60 hover:shadow-sky-100/50 bg-slate-100/80',
    primaryOnDark: 'bg-blue-700 text-white hover:bg-blue-800',
} as const;

type Variant = keyof typeof variantStyles;

interface ButtonProps {
    variant?: Variant;
    href?: Url;
    className?: string;
}

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>> = ({
                                                                                                                variant = 'primary',
                                                                                                                className,
                                                                                                                href,
                                                                                                                ...props
                                                                                                            }) => {
    const combinedClassName = clsx(
        'inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none',
        variantStyles[variant],
        className
    );

    return href ? (
        <Link href={href} className={combinedClassName} {...props} />
    ) : (
        <button className={combinedClassName} {...props} />
    );
};
