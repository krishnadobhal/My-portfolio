"use client"
import { Middle } from "./middle";
import { Resume } from "./Resume_icon";
import Svg from "./svg";
import { Sora } from 'next/font/google'
import { useState } from "react";

const sora = Sora({
    subsets: ['latin']
})

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollAndClose = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <div className={sora.className}>
            <div className="flex justify-between items-center w-full font-extrabold text-xl relative mt-4 px-4">
                <div className="flex gap-3 items-center text-2xl ">
                    <Svg />
                    <div className="text-black">Portfolio</div>
                </div>

                {/* Desktop middle - hidden on small screens */}
                <div className="hidden md:block">
                    <Middle />
                </div>

                {/* Hamburger for mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen(prev => !prev)}
                        className="p-2 rounded hover:bg-slate-100"
                    >
                        {mobileOpen ? (
                            // close icon
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            // hamburger icon
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H21M3 12H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Resume link - hidden on small, shown on md+ */}
                <div className="hidden md:block">
                    <a
                        href="https://drive.google.com/file/d/1UokF9BOQnfhUb1OE23f90JhczI5L4ntq/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Resume />
                    </a>
                </div>

                {/* Mobile sidebar (overlay + sliding panel) */}
                {mobileOpen && (
                    <>
                        {/* backdrop */}
                        <div
                            className="fixed inset-0 bg-black/40 z-40 md:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* sidebar */}
                        <aside className="fixed right-0 top-0 bottom-0 w-64 bg-white z-50 p-4 md:hidden flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex gap-3 items-center text-2xl">
                                    <Svg />
                                    <div className="text-black font-extrabold">Portfolio</div>
                                </div>
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 rounded hover:bg-slate-100"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <nav className="flex flex-col gap-3">
                                <button className="text-left font-bold text-lg hover:underline" onClick={() => scrollAndClose('#about')}>About me</button>
                                <button className="text-left font-bold text-lg hover:underline" onClick={() => scrollAndClose('#skills')}>Skills</button>
                                <button className="text-left font-bold text-lg hover:underline" onClick={() => scrollAndClose('#project')}>Project</button>
                                <button className="text-left font-bold text-lg hover:underline" onClick={() => scrollAndClose('#experience')}>Experience</button>
                            </nav>

                            <div className="mt-auto">
                                <a
                                    href="https://drive.google.com/file/d/1UokF9BOQnfhUb1OE23f90JhczI5L4ntq/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Resume />
                                </a>
                            </div>
                        </aside>
                    </>
                )}
            </div>
        </div>
    )
}