'use client';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div
      className="min-h-[80vh] mx-8 flex flex-col justify-end gap-4 rounded-xl px-4 py-4 mt-20"
      style={{
        backgroundImage:
          'url(https://framerusercontent.com/images/TIX4p0eytuIUi12fXcUzxh2CSA.jpg?width=2000&height=1029)',
        backgroundSize: 'cover',
        backgroundPosition: 'center ',
        backgroundRepeat: 'no-repeat',
        color: 'white',
      }}
    >
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-blue-700 font-bold bg-indigo-200 w-fit p-2"
      >
        YEAR-END SALE
      </motion.span>
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold italic"
      >
        BLOCKRAVE
      </motion.h1>
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        SIGNATURE 25% OFF
      </motion.h2>
      <motion.p
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-lg"
      >
        Redefine your look with 25% off for all BLOCKHAUS Signatures outfit
      </motion.p>
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ gap: '20px', marginLeft: '5px' }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="bg-[#0000FF] text-white text-2xl font-semibold py-2 px-4 rounded flex items-center gap-2 w-fit"
      >
        <span>EXPLORE</span>
        <MdArrowOutward />
      </motion.button>
    </div>
  );
}
