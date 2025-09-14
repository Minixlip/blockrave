'use client';

import { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between w-screen px-4 py-4 relative h-fit items-center">
      <div>
        <span className="font-extrabold">BLOCKRAVE.</span>
      </div>
      <div className="flex gap-4 tracking-wide font-medium items-center">
        <button>NEW ARRIVAL</button>
        <button>MENS</button>
        <button>WOMENS</button>
        <button>ABOUT US</button>
        <hr className="text-black font-bold w-3" />
        <button>
          <FaMagnifyingGlass />
        </button>
        <SidebarTrigger />
      </div>
    </div>
  );
}
