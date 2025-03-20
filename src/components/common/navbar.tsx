"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavItem {
    label: string
    href: string
}

interface NavbarProps {
    items?: NavItem[]
    className?: string
}

export default function Navbar({
    items = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Stack", href: "/stack" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ],
    className,
}: NavbarProps) {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 transition-all duration-300">
            <div className="absolute inset-0 -z-10 backdrop-blur-md bg-white/30" />

            <nav
                className={cn(
                    "relative flex items-center justify-center rounded-full px-2 py-2 max-w-auto",
                    "border border-white/10 bg-white shadow-lg",
                    className
                )}
            >
                <ul className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
                    {items.map((item) => {
                        const isActive = pathname === item.href

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:text-base",
                                        isActive ? "bg-orange-500 text-white" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
