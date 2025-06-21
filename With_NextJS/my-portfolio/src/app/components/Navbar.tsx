"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/chatbot", label: "AI Agent 💬" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 px-6 py-4 backdrop-blur-lg">
      <div className="flex justify-center gap-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "text-sm font-medium transition-all hover:text-pink-500",
              pathname === href ? "text-pink-400 underline" : "text-white"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
