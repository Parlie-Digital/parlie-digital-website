// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import '@/src/app/styles/globals.css';
//
// import Provider from "@/src/providers/theme-provider";
// import clsx from "clsx";
// import { cookies } from "next/headers";
// import { ToastProvider } from '@/src/providers/toast-provider';
// import FramerAnimation from "@/src/app/FramerAnimation";
// import siteMetadata from "@/src/lib/siteMetaData";
// import Navbar from "@/src/components/ui/Navbar/Navbar";
// // import Footer from "@/components/ui/Footer"; // Uncomment if needed
//
// const inter = Inter({ subsets: ["latin"] });
//
// export const metadata: Metadata = {
//   metadataBase: new URL(siteMetadata.siteUrl),
//   title: {
//     template: `%s | ${siteMetadata.title}`,
//     default: siteMetadata.title,
//   },
//   description: siteMetadata.description,
//   icons: {
//     icon: siteMetadata.siteLogo,
//   },
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: siteMetadata.siteUrl,
//     siteName: siteMetadata.siteName,
//     images: [siteMetadata.socialBanner],
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//   },
// };
//
// function getTheme(): string {
//   const cookieStore = cookies();
//   const themeCookie = cookieStore.get("theme");
//   return themeCookie ? themeCookie.value : "dark";
// }
//
// export default function RootLayout({
//                                      children,
//                                    }: {
//   children: React.ReactNode;
// }) {
//   const theme = getTheme();
//
//   return (
//       <html
//           lang="en"
//           className={clsx(inter.className, "scroll-smooth", theme)}
//           style={{ colorScheme: theme }}
//           suppressHydrationWarning
//       >
//       <body>
//       <link rel="icon" href="/logos/logo.webp" sizes="any" />
//       <Provider>
//         <Navbar />
//         <FramerAnimation>
//           <ToastProvider />
//           {children}
//         </FramerAnimation>
//         {/* Uncomment the Footer if needed */}
//         {/* <Footer /> */}
//       </Provider>
//       </body>
//       </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/src/app/styles/globals.css';

import Provider from "@/src/providers/theme-provider";
import clsx from "clsx";
import siteMetadata from "@/src/lib/siteMetaData";
 import { ToastProvider } from '@/src/providers/toast-provider';
 import FramerAnimation from "@/src/app/FramerAnimation";
import Navbar from "@/src/components/ui/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  icons: {
    icon: siteMetadata.siteLogo,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={clsx(inter.className, "scroll-smooth")} suppressHydrationWarning>
      <body>
      <link rel="icon" href="/logos/logo.webp" sizes="any" />
      <Provider>
        <Navbar />
        <FramerAnimation>
          <ToastProvider />
          {children}
        </FramerAnimation>
        {/* Uncomment the Footer if needed */}
        {/* <Footer /> */}
      </Provider>
      </body>
      </html>
  );
}
