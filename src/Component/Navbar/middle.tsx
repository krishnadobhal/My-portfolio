"use client"

import { useEffect, useState } from "react";

export const Middle = () => {
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    if (scrollTarget) {
      const target = document.getElementById(scrollTarget); 
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); 
        setScrollTarget(null); 
      }
    }
  }, [scrollTarget]);

  return (
    <div className="text-black flex justify-between mx-10 gap-10 font-bold text-xl">
      <div className="hover:underline hover:text-zinc-600">
        <button onClick={() => setScrollTarget('#about')}>About me</button>
      </div>
      <div className="hover:underline hover:text-zinc-600">
        <button onClick={() => setScrollTarget('#skills')}>Skills</button>
      </div>
      <div className="hover:underline hover:text-zinc-600">
        <button onClick={() => setScrollTarget('#project')}>Project</button>
      </div>
      <div className="hover:underline hover:text-zinc-600">
        <button onClick={() => setScrollTarget('#experience')}>Experience</button>
      </div>
    </div>
  );
};


