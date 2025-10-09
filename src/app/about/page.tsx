"use client";
import React from "react";
import { ShoppingCart, Cpu, Smartphone, Headphones } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          TechnoShop haqida
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          <span className="font-semibold">TechnoShop</span> – bu zamonaviy
          texnologiyalar dunyosiga yo‘l ochadigan onlayn do‘kon. Bizning
          maqsadimiz — eng yangi va sifatli elektronika mahsulotlarini
          mijozlarga qulay narxlarda taqdim etish.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <Cpu className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-blue-700">Innovatsiya</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Eng so‘nggi texnologiyalarni doimiy ravishda olib kelamiz.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <Smartphone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-blue-700">Elektronika</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Telefonlar, noutbuklar va boshqa qurilmalar — hammasi bir joyda.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <Headphones className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-blue-700">
              Aksessuarlar
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Siz uchun kerakli barcha gadjetlar va aksessuarlar mavjud.
            </p>
          </div>
        </div>

        <Link href="/">
          <button className="mt-10 px-8 py-3 flex items-center gap-2 mx-auto bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            <ShoppingCart className="w-5 h-5" />
            Xarid qilishni boshlash
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
