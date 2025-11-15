"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  const items = [
    {
      title: "جودة معتمدة",
      desc: "نستورد منتجات من أفضل الشركات العالمية بمعايير عالية.",
      icon: "💎",
    },
    {
      title: "أسعار تنافسية",
      desc: "نوفر أسعار مناسبة للموزعين والمشاريع الكبيرة.",
      icon: "💰",
    },
    {
      title: "ضمان وموثوقية",
      desc: "جميع الأجهزة بضمان معتمد وخدمة ما بعد البيع.",
      icon: "🛡️",
    },
    {
      title: "دعم فني مستمر",
      desc: "فريق متخصص لتقديم الدعم الفني والتركيب والصيانة.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* cinematic glow */}
      <div className="absolute -left-20 top-0 w-80 h-80 bg-indigo-200/40 blur-[120px] rounded-full" />
      <div className="absolute -right-20 bottom-0 w-80 h-80 bg-fuchsia-200/40 blur-[120px] rounded-full" />

      <div className="relative container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-indigo-900 text-center"
        >
          لماذا نحن؟
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-3 text-center text-slate-600 max-w-2xl mx-auto"
        >
          نوفّر جودة وسرعة وثقة تجعلنا الخيار الأول لعملائنا في السوق الليبي.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group rounded-3xl bg-white border border-indigo-100 shadow-[0_10px_40px_rgba(79,70,229,0.08)] p-6 text-center hover:-translate-y-1 transition-transform"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-indigo-800">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
