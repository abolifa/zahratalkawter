"use client";

import { motion } from "framer-motion";

export default function AboutZahrat() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-linear-to-b from-white via-indigo-50/30 to-white py-28"
    >
      <CinematicBackground />

      <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <VisualSide />
        <ContentSide />
      </div>
    </section>
  );
}

// ---------------------------- VISUAL SIDE ---------------------------- //

function VisualSide() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-md aspect-square rounded-[40px] bg-linear-to-br from-indigo-300 via-indigo-200 to-white shadow-[0_25px_80px_rgba(67,56,202,0.25)] overflow-hidden"
      >
        <div className="absolute -inset-1 bg-[radial-gradient(circle_at_20%_0,rgba(79,70,229,0.45),transparent),radial-gradient(circle_at_80%_100%,rgba(99,102,241,0.45),transparent)] opacity-80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative h-full w-full flex items-center justify-center"
        >
          <div className="relative w-[82%] h-[82%] rounded-4xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_18px_60px_rgba(67,56,202,0.28)] overflow-hidden">
            <motion.img
              src="/images/home-appl.png"
              alt=""
              className="h-full w-full object-contain"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>

          <FloatingBadge
            className="absolute -left-4 top-[14%]"
            label="جودة عالية"
          />
          <FloatingBadge
            className="absolute -right-4 bottom-[18%]"
            label="حماية وأمان"
            direction="left"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ---------------------------- CONTENT SIDE ---------------------------- //

function ContentSide() {
  return (
    <div className="relative md:pr-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
        className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1 text-[13px] font-medium text-indigo-700 border border-indigo-100 shadow-sm"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)]" />
        زهرة الكوثر للأجهزة الكهربائية وغير الكهربائية
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-5 text-4xl md:text-4xl font-black leading-tight text-indigo-900"
      >
        حلول كهربائية متقدمة
        <span className="block text-transparent bg-clip-text bg-linear-to-l from-indigo-500 via-indigo-600 to-fuchsia-500">
          تلائم كل بيت{" "}
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-slate-600 max-w-xl"
      >
        شركة زهرة الكوثر شركة ليبية رائدة في استيراد الأجهزة والمواد الكهربائية
        وغير الكهربائية. نوفّر منتجات تتميز بجودة عالية، أداء موثوق، وتصميم عصري
        يخدم احتياجات المنازل والمشاريع والشركات بكفاءة واستدامة.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <FeatureCard
          title="علامات عالمية معتمدة"
          text="منتجات موثوقة من كبار المصنعين الدوليين."
        />
        <FeatureCard
          title="جاهزية للمشاريع"
          text="حلول تناسب المقاولين والموزعين بكفاءة عالية."
        />
        <FeatureCard
          title="خدمة وصيانة"
          text="متابعة ودعم فني مستمر لراحة العملاء."
        />
        <FeatureCard
          title="رؤية مستقبلية"
          text="نتبنى الابتكار لتوفير أفضل الحلول للسوق الليبي."
        />
      </motion.div>
    </div>
  );
}

// ---------------------------- CARDS ---------------------------- //

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/90 border border-indigo-100 shadow-[0_12px_40px_rgba(79,70,229,0.08)] px-5 py-4 transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-linear-to-l from-indigo-50/0 via-indigo-50/50 to-indigo-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="relative">
        <h3 className="text-[15px] font-semibold text-indigo-900 mb-1">
          {title}
        </h3>
        <p className="text-[13px] text-slate-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

// ---------------------------- FLOATING BADGES ---------------------------- //

function FloatingBadge({
  label,
  className,
  direction = "right",
}: {
  label: string;
  className?: string;
  direction?: "right" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "right" ? 30 : -30, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      animate={{ y: [0, -8, 0] }}
      className={`rounded-2xl bg-white/90 backdrop-blur-xl border border-indigo-100 shadow-[0_12px_40px_rgba(79,70,229,0.22)] px-4 py-2 text-xs font-medium text-indigo-900 flex items-center gap-2 ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,0.8)]" />
      {label}
    </motion.div>
  );
}

// ---------------------------- CINEMATIC BACKGROUND ---------------------------- //

function CinematicBackground() {
  return (
    <>
      <motion.div
        className="pointer-events-none absolute -left-40 -top-20 h-80 w-80 rounded-full bg-indigo-300/60 blur-[90px]"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-[-120px] -bottom-10 h-96 w-96 rounded-full bg-indigo-200/60 blur-[110px]"
        animate={{ y: [0, -28, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
    </>
  );
}
