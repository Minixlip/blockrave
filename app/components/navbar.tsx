'use client';

import { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { FaArrowPointer, FaMagnifyingGlass } from 'react-icons/fa6';

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
                {link.name}
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
          <SidebarTrigger />
        </div>
      </div>
      {/* Search Modal */}
      <SearchModal
        open={open}
        setOpen={setOpen}
      />
      <Banner />
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
import Banner from './home/Banner';

function SearchModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetContent
        side="top"
        className="flex items-center justify-center max-w-md mx-auto mt-32 rounded-lg p-6 bg-background shadow-lg"
        style={{ left: '40%', transform: 'translateX(-50%)', top: '20%' }}
      >
        <div className="relative w-full">
          <Input
            placeholder="search product"
            className="pl-10 pr-4 py-2 w-full"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <FaMagnifyingGlass />
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
