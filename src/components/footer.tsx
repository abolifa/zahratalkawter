"use client";

import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a15] text-white pt-20 pb-10 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-500/20 blur-[180px] rounded-full" />

      <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-fuchsia-300">
              شركة زهرة الكوثر
            </h3>
            <p className="mt-4 text-gray-300 leading-relaxed text-[15px]">
              استيراد الأجهزة الكهربائية وغير الكهربائية بجودة عالية وخدمة
              احترافية للسوق الليبي.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-5">
              <Link
                to="#"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                to="#"
                className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-indigo-300">
              روابط مهمة
            </h4>
            <ul className="space-y-3 text-gray-300 text-[15px]">
              <li>
                <Link to="#about" className="hover:text-white transition">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="#products" className="hover:text-white transition">
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:text-white transition">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-indigo-300">
              معلومات التواصل
            </h4>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-6 h-6 text-indigo-400" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                طرابلس – ليبيا
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-indigo-400" />
              <p className="text-gray-300" dir="ltr">
                +218 91 215 9528
              </p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-indigo-400" />
              <p className="text-gray-300 break-all">
                info@zahratalkawthar.com.ly
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-gray-400 text-[14px]">
          © {new Date().getFullYear()} شركة زهرة الكوثر — جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
