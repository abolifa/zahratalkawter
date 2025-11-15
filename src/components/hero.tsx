import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function UltraHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-[#050505] text-white"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),rgba(0,0,0,0.9))]"
        style={{ y: y3 }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.55] bg-[url('/images/noise.png')] mix-blend-soft-light"
        style={{ y: y2 }}
      />

      <motion.div
        className="absolute top-0 left-0 w-[1400px] h-[1400px] rounded-full bg-fuchsia-600/20 blur-[180px]"
        style={{ y: y1 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[1500px] h-[1500px] rounded-full bg-emerald-500/20 blur-[200px]"
        style={{ y: y1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center flex-col"
      >
        <motion.img
          src="/meta/icon-white.png"
          alt="Ultra Logo"
          className="w-32 md:w-48 select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl md:text-5xl leading-relaxed font-black tracking-tight bg-linear-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent select-none"
        >
          شركة زهرة الكوثر
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-2 text-md md:text-2xl max-w-xl text-center opacity-80"
        >
          لاستيراد الأجهزة الكهربائية وغير الكهربائية
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 1.2 }}
          className="mt-12 flex gap-6"
        >
          <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold text-lg shadow-[0_0_50px_-12px_rgba(255,255,255,0.6)] hover:scale-105 transition">
            تواصل معنا
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/60 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/10 transition">
            إعرف أكثر
          </button>
        </motion.div>
      </motion.div>

      {/* <FloatingItems /> */}
      <Spotlight />
    </section>
  );
}

// function FloatingItems() {
//   const items = [
//     "/items/i1.webp",
//     "/items/i2.png",
//     "/items/i3.png",
//     "/items/i4.png",
//   ];

//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {items.map((src, i) => (
//         <motion.img
//           key={i}
//           src={src}
//           className="absolute w-24 md:w-32 opacity-80"
//           initial={{ opacity: 0, y: 60, scale: 0.8 }}
//           animate={{
//             opacity: [0.6, 1, 0.6],
//             y: [0, -20, 0],
//             rotate: [0, 6, -6, 0],
//           }}
//           transition={{
//             duration: 6 + i,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           style={{
//             top: `${20 + i * 15}%`,
//             left: `${10 + i * 20}%`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

function Spotlight() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.15),transparent_60%)]"
        animate={{
          "--x": ["20%", "80%", "50%", "30%", "70%"],
          "--y": ["30%", "20%", "60%", "80%", "40%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
