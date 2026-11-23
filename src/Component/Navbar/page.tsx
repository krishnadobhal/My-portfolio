"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "@/components/providers/lenis-provider";

const LINKS = [
  { label: "Work", id: "work" },
  { label: "Projects", id: "projects" },
  { label: "Open Source", id: "open-source", href: "/open-source" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = (id: string, href?: string) => {
    if (href) {
      router.push(href);
      setOpen(false);
      return;
    }
    // Off the home page the section isn't here: go home, then to the hash.
    if (pathname !== "/" && id !== "contact") {
      router.push(id === "top" ? "/" : `/#${id}`);
      setOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <button onClick={() => scrollTo("top")} className="text-label">
          Krishna Dobhal
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id, link.href)}
              className="text-nav text-paper/85 transition-colors hover:text-amber"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`h-px w-5 bg-paper transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-paper transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-line px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id, link.href)}
                className="text-nav text-left text-paper/85"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
