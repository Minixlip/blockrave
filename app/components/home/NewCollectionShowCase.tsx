'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface Collection {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  mainPhoto: string;
  thumbnail: string;
}

export default function NewCollectionShowCase() {
  const router = useRouter();
  const winterCollection: Array<Collection> = [
    {
      id: 1,
      name: 'Olive Winter Blazer',
      price: 149,
      discountedPrice: 99,
      mainPhoto:
        'https://framerusercontent.com/images/GlsdVBVxwQ4DYJPebTvED5XLbY.jpg',
      thumbnail:
        'https://framerusercontent.com/images/y35Ugj6Fywi3GHcAKGjYIL7y4s.jpg?scale-down-to=1024',
    },
    {
      id: 2,
      name: 'Blue Puffy Jacket',
      price: 99,
      discountedPrice: 129,
      mainPhoto:
        'https://framerusercontent.com/images/B4Fm59FkCV9tyqFNDuTcsnq0k.jpg',
      thumbnail:
        'https://framerusercontent.com/images/NNchAtNg7hHDKXnoLVlpSyOm0.jpg',
    },
    {
      id: 3,
      name: 'Stylish Grey Jacket',
      price: 99,
      discountedPrice: 0,
      mainPhoto:
        'https://framerusercontent.com/images/RRNJ8GoODJWR1EYufMZKsIP6E.jpg',
      thumbnail:
        'https://framerusercontent.com/images/Nmi33f7ncw60nQ1KUITvz5JCEMQ.jpg',
    },
  ];

  const [count, setCount] = useState(0);
  const slideDuration = 4;

  const nextSlide = () => {
    setCount((prevCount) => (prevCount + 1) % winterCollection.length);
  };

  const prevSlide = () => {
    setCount(
      (prevCount) =>
        (prevCount - 1 + winterCollection.length) % winterCollection.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, slideDuration * 1000);

    return () => clearInterval(timer);
  }, []);

  const currentItem = winterCollection[count];

  return (
    // 1. Switched to min-h-screen and added gap for simpler spacing
    <div className="min-h-screen bg-neutral-100 flex flex-col lg:flex-row p-4 gap-4">
      {/* 2. Changed flex-1 to lg:flex-1 and simplified margins */}
      <div className="bg-white lg:flex-1 rounded-lg flex flex-col justify-center p-6">
        <div className="flex flex-col gap-2">
          <span className="italic text-xl font-mono">NEW COLLECTION</span>
          <h1 className="font-bold text-5xl italic font-mono">WINTER WEAR</h1>
        </div>
        <div className="flex flex-col justify-center gap-4 mt-8">
          <p className=" text-wrap italic text-xl tracking-wider font-light">
            Explore the newest additions to our Men&#39;s Collection to discover
            clothing, shoes, bags and accessories featuring signature styles and
            detailing.
          </p>
          <Button className="w-fit text-2xl bg-blue-700 hover:bg-blue-500 rounded-md p-6">
            <Link href={'/shop/collection'}>Browse All</Link>
          </Button>
        </div>
      </div>

      {/* 3. Changed flex-1 to lg:flex-1 and kept responsive height */}
      <div className="lg:flex-1 relative overflow-hidden rounded-lg h-[80vh] lg:h-auto">
        {/* Layer 1: Background Images (No Change) */}
        <AnimatePresence>
          <motion.div
            key={count}
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url(${currentItem.mainPhoto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* Layer 2: UI Overlay (No Change) */}
        <div className="relative z-10 h-full p-5">
          {/* Progress Bars, Arrows, and Card remain the same */}
          <div className="flex items-center gap-3">
            {winterCollection.map((_, index) => (
              <div
                key={index}
                className="h-1 w-full rounded-full bg-white/40"
              >
                {index === count && (
                  <motion.div
                    className="h-1 rounded-full bg-white"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: slideDuration, ease: 'linear' }}
                    style={{ originX: 0 }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-black/40 p-3 text-white transition hover:bg-black/60"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
          <AnimatePresence>
            <motion.div
              key={count}
              className="absolute bottom-5 left-1/2 w-[90%] cursor-pointer rounded-lg bg-white/80 p-3 backdrop-blur-sm transition hover:bg-white"
              onClick={() => router.push(`/shop/item/${currentItem.id}`)}
              initial={{ opacity: 0, y: 20, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 20, x: '-50%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={currentItem.thumbnail}
                  alt={currentItem.name}
                  className="h-32 w-32 rounded-md object-cover"
                />
                <div>
                  <h3 className="italic font-thin tracking-wider text-2xl">
                    {currentItem.name}
                  </h3>
                  <p className="text-gray-700 text-lg">
                    {currentItem.discountedPrice > 0 ? (
                      <>
                        <span className="font-bold text-black">
                          ${currentItem.discountedPrice}
                        </span>
                        <span className="ml-2 line-through text-neutral-500/50">
                          ${currentItem.price}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-black">
                        ${currentItem.price}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
