'use client';

import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaShoppingBasket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaArrowAltCircleRight } from 'react-icons/fa';

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
    <div className="flex justify-between w-screen px-8 py-4 fixed h-fit items-center bg-white top-0">
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
        <button onClick={() => setOpen(true)}>
          <FaShoppingBasket />
        </button>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="h-screen w-[50%] fixed top-0 right-0 bg-white/50 backdrop-blur-sm shadow-lg p-4 flex flex-col justify-between"
          >
            <div className="flex justify-between py-2 border-b border-gray-300/50">
              <span className="font-bold text-2xl">Shopping Cart</span>
              <button onClick={() => setOpen(false)}>X</button>
            </div>
            <div className="flex-1 py-4">Items</div>
            <div className="border-t border-gray-300/50 pt-4 flex ">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">Total:</span>
                <span className="font-bold text-2xl">$0.00</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto bg-black text-white px-4 py-2 rounded-md"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
