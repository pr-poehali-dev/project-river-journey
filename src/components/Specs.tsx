import Icon from "@/components/ui/icon";

const images = [
  "https://cdn.poehali.dev/projects/eb907a00-9e48-4af0-a5e8-24f3a4249676/files/d51b6c78-c77c-48cc-98d9-de49fd36a860.jpg",
  "https://cdn.poehali.dev/projects/eb907a00-9e48-4af0-a5e8-24f3a4249676/files/158a82b7-1eff-43b6-aa73-b3a11e3a0c32.jpg",
];

const specs = [
  { label: "Модель", value: "AirPods Pro (2-го поколения)" },
  { label: "Чип", value: "Apple H2" },
  { label: "Шумоподавление", value: "Активное (ANC)" },
  { label: "Режим прозрачности", value: "Адаптивный" },
  { label: "Время работы", value: "6 ч / 30 ч с кейсом" },
  { label: "Зарядка", value: "Lightning, MagSafe, Qi" },
  { label: "Влагозащита", value: "IPX4" },
  { label: "Совместимость", value: "iPhone, iPad, Mac, Apple Watch" },
];

import { useState } from "react";

export default function Specs() {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Галерея */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="bg-neutral-50 rounded-2xl overflow-hidden aspect-square">
              <img
                src={images[activeImg]}
                alt="AirPods"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === i ? "border-neutral-900" : "border-transparent"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Контент */}
          <div className="flex-1 flex flex-col">
            {/* Рейтинг */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-neutral-500">4.9 · 2 840 отзывов</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1 leading-tight">
              Apple AirPods Pro 2-го поколения
            </h1>
            <p className="text-neutral-500 text-sm mb-5">Артикул: APP-AIRPODS-PRO2</p>

            {/* Цена */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-neutral-900">18 990 ₽</span>
              <span className="text-lg text-neutral-400 line-through">24 990 ₽</span>
              <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-0.5 rounded-md">−24%</span>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button className="flex-1 bg-[#cb11ab] hover:bg-[#b00f99] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base">
                Купить сейчас
              </button>
              <button className="flex-1 border-2 border-neutral-200 hover:border-neutral-400 text-neutral-800 font-semibold py-3 px-6 rounded-xl transition-colors duration-200 text-base flex items-center justify-center gap-2">
                <Icon name="Heart" size={18} />
                В избранное
              </button>
            </div>

            {/* Доставка */}
            <div className="flex flex-col gap-2 mb-8 bg-neutral-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon name="Truck" size={16} className="text-green-600" />
                <span>Доставка завтра при заказе до 18:00</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon name="RotateCcw" size={16} className="text-neutral-500" />
                <span>Бесплатный возврат в течение 14 дней</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Icon name="ShieldCheck" size={16} className="text-blue-500" />
                <span>Официальная гарантия Apple 1 год</span>
              </div>
            </div>

            {/* Характеристики */}
            <h3 className="text-base font-semibold text-neutral-900 mb-3 uppercase tracking-wide">Характеристики</h3>
            <div className="border border-neutral-100 rounded-xl overflow-hidden">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex text-sm ${i % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}
                >
                  <span className="w-1/2 px-4 py-2.5 text-neutral-500">{s.label}</span>
                  <span className="w-1/2 px-4 py-2.5 text-neutral-900 font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
