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
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <GiHamburgerMenu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link) => (
            <div key={link.name}>
              <DropdownMenuItem className="py-4">
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="w-full h-full"
                >
                  <Link
                    className=" flex justify-between gap-10 relative"
                    href={link.href}
                  >
                    {/* Black text (default state) */}
                    <span className="relative">{link.name}</span>
                    {/* Blue text (animated on hover) */}
                    <motion.span
                      className="absolute left-0 top-0 text-[#0000FF]"
                      variants={{
                        rest: { clipPath: 'inset(0 100% 0 0)' },
                        hover: { clipPath: 'inset(0 0 0 0)' },
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      {link.name}
                    </motion.span>{' '}
                    <FaArrowAltCircleRight />
                  </Link>
                </motion.div>
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
          <div className="hidden lg:flex gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                className="p-2"
                href={link.href}
              >
                <motion.div
                  className="relative"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Black text (default state) */}
                  <span className="relative">{link.name}</span>

                  {/* Blue text (animated on hover) */}
                  <motion.span
                    className="absolute left-0 top-0 text-[#0000FF]"
                    variants={{
                      rest: { clipPath: 'inset(0 100% 0 0)' },
                      hover: { clipPath: 'inset(0 0 0 0)' },
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    {link.name}
                  </motion.span>

                  {/* Underline animation */}
                  <motion.div
                    className="absolute w-full h-[2px] bg-[#0000FF] bottom-[-4px] left-0"
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </motion.div>
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
