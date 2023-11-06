"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);  // initiate isNavOpen state with false

  return (
    <nav className="bg-[#272424] text-white flex justify-around p-4 phone:p-0 sticky top-0 drop-shadow-xl z-10 phone:flex-col phone:relative phone:bg-inherit">
      <div className="phone:flex phone:justify-between phone:bg-[#272424] phone:z-20 phone:p-4">
        <h2 className="font-black">
          <Link href="/" className="group relative">Pro Wrestling In Japan
          <span className="invisible text-black bg-[#fff] text-[13px] font-normal px-[8px] py-[2px] border border-solid border-black absolute top-full left-[10px] z-20 delay-[1000ms] group-hover:visible phone:text-xs">Pro Wrestling In Japan</span>
          </Link>
        </h2>
        <div onClick={() => setIsNavOpen((prev) => !prev)} // Toggle isNavOpen state on click
            className={!isNavOpen ? "MENU-BTN" : "MENU-BTN-OPEN"}
        >
          <div className="MENU-BTN-HAMBURGER"></div>
        </div>
      </div>
      <div id="dropdown" className={isNavOpen ? "font-bold flex gap-x-6 phone:flex-col phone:gap-y-1 phone:z-10 phone:p-4 phone:bg-[#272424]" : "font-bold flex gap-x-6 phone:-translate-y-full phone:flex-col phone:gap-y-1 phone:z-10 phone:p-4 phone:bg-[#272424] phone:hidden"}>
        <Link href="/about" className="group relative">About
          <span className="invisible text-black bg-[#fff] text-[13px] font-normal px-[8px] py-[2px] border border-solid border-black absolute top-full left-[10px] z-20 delay-[1000ms] group-hover:visible phone:text-xs">About</span>
        </Link>
        <Link href="/njpw" className="group relative">NJPW
          <span className="invisible text-black bg-[#fff] text-[13px] font-normal px-[8px] py-[2px] border border-solid border-black absolute top-full left-[10px] z-20 delay-[1000ms] group-hover:visible phone:text-xs">NJPW</span>
        </Link>
        <Link href="/pro_wrestling_noah" className="group relative">Pro Wrestling Noah
          <span className="invisible text-black bg-[#fff] text-[13px] font-normal px-[8px] py-[2px] border border-solid border-black absolute top-full left-[10px] z-20 delay-[1000ms] group-hover:visible phone:text-xs">Pro Wrestling Noah</span>
        </Link>
        <Link href="/ajpw" className="group relative">AJPW
          <span className="invisible text-black bg-[#fff] text-[13px] font-normal px-[8px] py-[2px] border border-solid border-black absolute top-full left-[10px] z-20 delay-[1000ms] group-hover:visible phone:text-xs">AJPW</span>
        </Link>
        <Link href="/overall" className="group relative">Overall
          <span className="invisible text-black bg-[#fff] text-[13px] font-normal px-[8px] py-[2px] border border-solid border-black absolute top-full left-[10px] z-20 delay-[1000ms] group-hover:visible phone:text-xs">Overall</span>
        </Link>
      </div>
    </nav>
  )
}