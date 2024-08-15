// "use client"
//
// import {useEffect, useState} from "react";
// import {RiMoonClearLine, RiSunLine} from "react-icons/ri";
//
// const ThemeToggle = () => {
//
//     const [mounted , setMounted] = useState(false)
//     const [resolvedTheme, setResolvedTheme] = useState()
//
//     useEffect(() => {
//         setMounted(true)
//     }, []);
//
//     if(!mounted){
//         return null;
//     }
//
//     const toggleDarkMode = () => {
//         const newTheme = resolvedTheme === "dark" ? "light": "dark"
//     }
//
//     return (
//         <button onClick={toggleDarkMode} className="flex items-center focus:outline-none">
//             {resolvedTheme === "dark" ?(<div className="mr-2 text-4xl text-orange-300">
//                 <RiSunLine/>
//             </div>):(<div className="mr-2 text-4xl text-gray-700">
//                 <span className="text-slate-800">
//                     <RiMoonClearLine/>
//                 </span>
//             </div>)}
//         </button>
//     )
// }
// export default ThemeToggle

// "use client";
//
// import { useEffect, useState } from "react";
// import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
//
// const ThemeToggle = () => {
//     const [resolvedTheme, setResolvedTheme] = useState(
//         typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
//     );
//
//     useEffect(() => {
//         document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
//         localStorage.setItem("theme", resolvedTheme);
//     }, [resolvedTheme]);
//
//     const toggleDarkMode = () => {
//         setResolvedTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//     };
//
//     return (
//         <button onClick={toggleDarkMode} className="flex items-center focus:outline-none">
//             {resolvedTheme === "dark" ? (
//                 <div className="mr-2 text-4xl text-orange-300">
//                     <RiSunLine />
//                 </div>
//             ) : (
//                 <div className="mr-2 text-4xl text-gray-700">
//                     <RiMoonClearLine />
//                 </div>
//             )}
//         </button>
//     );
// };
//
// export default ThemeToggle;

// "use client";
//
// import { useEffect, useState } from "react";
// import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
// import Cookies from "js-cookie"; // Import js-cookie to manage cookies
//
// const ThemeToggle = () => {
//     const [resolvedTheme, setResolvedTheme] = useState(
//         typeof window !== "undefined" ? Cookies.get("theme") || "light" : "light"
//     );
//
//     useEffect(() => {
//         document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
//         Cookies.set("theme", resolvedTheme, { expires: 365 }); // Set cookie with expiration
//     }, [resolvedTheme]);
//
//     const toggleDarkMode = () => {
//         setResolvedTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//     };
//
//     return (
//         <button onClick={toggleDarkMode} className="flex items-center focus:outline-none">
//             {resolvedTheme === "dark" ? (
//                 <div className="mr-2 text-4xl text-orange-300">
//                     <RiSunLine />
//                 </div>
//             ) : (
//                 <div className="mr-2 text-4xl text-gray-700">
//                     <RiMoonClearLine />
//                 </div>
//             )}
//         </button>
//     );
// };
//
// export default ThemeToggle;


"use client";

import { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <button onClick={toggleDarkMode} className="flex items-center focus:outline-none">
            {theme === "dark" ? (
                <div className="mr-2 text-4xl text-orange-300">
                    <RiSunLine />
                </div>
            ) : (
                <div className="mr-2 text-4xl text-gray-700">
                    <RiMoonClearLine />
                </div>
            )}
        </button>
    );
};

export default ThemeToggle;
