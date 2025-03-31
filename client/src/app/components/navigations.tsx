"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>Home</Link>

            <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"}>About</Link>

            <Link href="/products/Iphone-16-promax" className={pathname.startsWith("/products/") ? "font-bold mr-4" : "mr-4 text-blue-500"}>Products</Link>

            <Link href="/login" className={pathname === "/login" ? "font-bold mr-4" : "mr-4 text-blue-500"}>Login</Link>

        </nav>
    );
}