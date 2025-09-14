'use client';

import { useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
    </>
  );
}

import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';

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
