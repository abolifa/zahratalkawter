"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactZahrat() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-[#f6f7ff] overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/charcoal-rock.jpg')" }}
      />

      {/* Floating glows */}
      <motion.div
        className="absolute top-20 left-10 w-60 h-60 bg-indigo-300/30 blur-3xl rounded-full"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-fuchsia-400/20 blur-2xl rounded-full"
        animate={{ y: [0, 15, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-700 to-fuchsia-600"
        >
          تواصل معنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto"
        >
          يسعدنا التواصل معكم والإجابة عن كافة الاستفسارات المتعلقة بخدماتنا
          ومنتجاتنا.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px", transition: { duration: 1 } }}
          className="h-1 bg-indigo-600 mx-auto mt-6 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 relative z-10 bg-white/40 rounded-3xl backdrop-blur-md border border-indigo-100">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-indigo-100"
        >
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            معلومات التواصل
          </h3>

          <div className="flex items-start gap-4">
            <MapPin className="text-indigo-700 w-6 h-6" />
            <p className="text-gray-700 leading-relaxed">مصراته – ليبيا</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-indigo-700 w-6 h-6" />
            <p dir="ltr" className="text-gray-700">
              +218 91 215 9528
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-indigo-700 w-6 h-6" />
            <p className="text-gray-700 break-all">
              info@zahratalkawthar.com.ly
            </p>
          </div>

          <iframe
            width="100%"
            height="250"
            loading="lazy"
            allowFullScreen
            className="rounded-xl mt-4"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1340!2d15.079002267527267!3d32.37732997383327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sly!4v0000000000001"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8 border border-indigo-100 space-y-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);

            const res = await fetch("https://yourdomain.com/contact-mail.php", {
              method: "POST",
              body: data,
            });

            const result = await res.json();

            if (result.success) {
              alert("تم إرسال رسالتك بنجاح!");
              form.reset();
            } else {
              alert("حدث خطأ أثناء الإرسال، الرجاء المحاولة لاحقًا.");
            }
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">الاسم</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                البريد الإلكتروني
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">رقم الهاتف</label>
            <input
              name="phone"
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">رسالتك</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-indigo-500 outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
            type="submit"
          >
            إرسال الرسالة
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
