import { Bars3Icon, Brs3Icon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export default function Header() {
    const [togglemenu,settogglemenu] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary ">
      <a className="font-bold text-black" href="#" >afsal</a>
      <nav className="hidden md:block">
      <ul className="flex text-white">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      </nav>
      {togglemenu && <nav className="block  md:hidden ">
      <ul className="flex flex-col text-white mobile-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      </nav>}
      <button onClick={()=>settogglemenu(!togglemenu)} className="block md:hidden"><Bars3Icon className='text-white h-6 w-6'/></button>
      
    </header>
  );
}