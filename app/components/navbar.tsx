'use client';

import { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const links = [
  { name: 'NEW ARRIVAL', href: '/shop/new-arrival' },
  { name: 'MENS', href: '/shop/mens' },
  { name: 'WOMENS', href: '/shop/womens' },
  { name: 'ABOUT US', href: '/about' },
];

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GiHamburgerMenu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link) => (
            <div key={link.name}>
              <DropdownMenuItem className="flex justify-between">
                <Link href={link.href}>{link.name}</Link>{' '}
                <FaArrowAltCircleRight />
              </DropdownMenuItem>
              <Separator></Separator>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between w-screen px-8 py-4 fixed h-fit items-center bg-white">
        <div>
          <Link href="/">
            <span className="font-extrabold text-4xl italic">BLOCKRAVE.</span>
          </Link>
        </div>
        <div className="flex gap-4 tracking-wide font-medium items-center">
          <div className="hidden md:flex gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                className="p-2"
                href={link.href}
              >
                <motion.span
                  whileHover={{
                    color: '#0000FF',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                    textDecorationColor: '#0000FF',
                  }}
                  transition={{ type: 'tween', stiffness: 100, duration: 1.2 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          <MobileMenu />
          <hr className="text-black font-bold w-3" />
          <button
            id="search"
            className="p-2"
            onClick={() => setOpen(true)}
          >
            <FaMagnifyingGlass />
          </button>
        </div>
      </div>
      {/* Search Modal */}
      <SearchModal
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Separator } from '@/components/ui/separator';

function SearchModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <div>
      <span>search</span>
    </div>
  );
}
