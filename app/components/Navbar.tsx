"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);  // initiate isNavOpen state with false

  return (
    <nav className="bg-[#272424] text-white flex justify-around p-4 phone:p-0 sticky top-0 drop-shadow-xl z-10 phone:flex-col phone:relative phone:bg-inherit">
      <div className="phone:flex phone:justify-between phone:bg-[#272424] phone:z-20 phone:p-4">
        <h2 className="font-black">
          <Link href="/">Pro Wrestling In Japan</Link>
        </h2>
        <div onClick={() => setIsNavOpen((prev) => !prev)} // Toggle isNavOpen state on click
            className={!isNavOpen ? "MENU-BTN" : "MENU-BTN-OPEN"}
        >
          <div className="MENU-BTN-HAMBURGER"></div>
        </div>
      </div>
      <div id="dropdown" className={isNavOpen ? "font-bold flex gap-x-6 phone:flex-col phone:gap-y-1 phone:z-10 phone:p-4 phone:bg-[#272424]" : "font-bold flex gap-x-6 phone:-translate-y-full phone:flex-col phone:gap-y-1 phone:z-10 phone:p-4 phone:bg-[#272424] phone:hidden"}>
        <Link href="/about">About</Link>
        <Link href="/njpw">NJPW</Link>
        <Link href="/pro_wrestling_noah">Pro Wrestling Noah</Link>
        <Link href="/ajpw">AJPW</Link>
        <Link href="/overall">Overall</Link>
      </div>
    </nav>
  )
}