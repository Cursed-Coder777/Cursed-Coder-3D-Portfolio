"use client";

import { motion } from "framer-motion";

export default function ScreenLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Circular Loader */}
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-purple-900/30" />
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin" />
        {/* Inner purple glow */}
        <div className="absolute inset-2 rounded-full bg-purple-600/20 blur-sm animate-pulse" />
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-white/60 text-sm md:text-base tracking-widest uppercase animate-pulse">
        Loading...
      </p>
    </motion.div>
  );
}