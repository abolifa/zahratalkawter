"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "الثلاجات والمجمدات",
    desc: "أحدث موديلات الثلاجات بجودة عالية.",
    image: "/images/freg.jpg",
  },
  {
    title: "الغسالات والنشافات",
    desc: "غسالات موثوقة بأداء قوي.",
    image: "/images/washer.avif",
  },
  {
    title: "الأجهزة المنزلية الصغيرة",
    desc: "مكانس، خلاطات، سخانات ماء وغيرها.",
    image: "/images/mini-app.png",
  },
  {
    title: "المكيفات",
    desc: "أنظمة تبريد عالية الكفاءة.",
    image: "/images/ac.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-indigo-900 text-center"
        >
          منتجاتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-3 text-center text-slate-600 max-w-2xl mx-auto"
        >
          مجموعة واسعة من الأجهزة الكهربائية وغير الكهربائية لتلبية احتياجات
          المنازل والمشاريع.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-indigo-100 shadow-[0_10px_40px_rgba(79,70,229,0.08)] p-5 hover:-translate-y-1 transition-transform"
            >
              <div className="relative w-full h-52 md:h-64 lg:h-96 overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src={cat.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-bold text-indigo-800">
                {cat.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
