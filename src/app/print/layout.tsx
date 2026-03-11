import React from "react";

export default function PrintLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* 
        This is a nested layout under the root layout.
        It strips the Navbar / FuturisticBackground by simply not rendering them.
        The root layout already provides <html> and <body>.
      */}
            {children}
        </>
    );
}
