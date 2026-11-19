import { useState } from "react";

const TELEGRAM_CONSULT = "https://t.me/Sergey_Kopach";
const TELEGRAM_CHANNEL = "https://t.me/serhii_kopach";

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const services = [
  {
    icon: "🎬",
    title: "Консультація з відеомонтажу",
    desc: "Розбір вашого проєкту, підбір програм, техніки монтажу для TikTok, Reels та YouTube Shorts. Поради щодо постпродакшну та вірусного контенту.",
    tags: ["TikTok", "Reels", "YouTube Shorts", "Постпродакшн"],
  },
  {
    icon: "💼",
    title: "Консультація по Upwork",
    desc: "Аналіз профілю, написання заявок, стратегія отримання перших клієнтів, зростання до рівня Top Rated та Expert-Vetted. Реальний досвід 3+ роки.",
    tags: ["Профіль", "Заявки", "Стратегія", "Top Rated"],
  },
];

const faqs = [
  {
    q: "Скільки коштує консультація?",
    a: "3000 грн / година. Оплата заздалегідь перед сесією.",
  },
  {
    q: "Як проходить консультація?",
    a: "Через Zoom або Google Meet. Ви отримуєте конкретний план дій, а не загальні поради.",
  },
  {
    q: "Чи є менторство на постійній основі?",
    a: "Так. Напишіть мені в Telegram — обговоримо формат і ціну.",
  },
  {
    q: "Для кого ці консультації?",
    a: "Для фрілансерів-початківців, відеографів і всіх, хто хоче заробляти на монтажі або Upwork.",
  },
];

const reviews = [
  {
    name: "Аліна В.",
    text: "Після консультації по Upwork я отримала першого клієнта вже за 4 дні. Сергій дав конкретні кроки без зайвої води.",
    avatar: "А",
  },
  {
    name: "Михайло Р.",
    text: "Розібрали мій монтаж Reels, Сергій показав як прискорити ворк-флоу вдвічі. Реально корисно.",
    avatar: "М",
  },
  {
    name: "Оксана Т.",
    text: "Оптимізували профіль Upwork — через тиждень прийшли перші запрошення від клієнтів. Рекомендую.",
    avatar: "О",
  },
];

function StarRating() {
  return (
    <span className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-colors">
        <span className="text-white font-medium text-sm md:text-base">{q}</span>
        <span className={`text-purple-400 text-xl font-bold transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </div>
      {open && (
        <div className="px-5 py-4 text-gray-300 text-sm md:text-base bg-white/[0.03]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d14] text-white font-sans overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 py-24"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d14]/80 via-[#0d0d14]/60 to-[#0d0d14]" />

        {/* Badge */}
        <div className="relative z-10 mb-6 inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/40 text-purple-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Відеомонтаж · Upwork · Фріланс
        </div>

        <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Консультації
          </span>
          <br />
          <span className="text-white">які дають результат</span>
        </h1>

        <p className="relative z-10 text-gray-300 text-lg md:text-xl max-w-2xl mb-4">
          Привіт, я — <strong className="text-white">Сергій Копач</strong>, фрілансер-відеомонтажер з досвідом{" "}
          <strong className="text-purple-400">3+ роки</strong> на Upwork та Fiverr.
          Допомагаю стартувати і масштабуватися на фрілансі.
        </p>

        <p className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-10">
          💰 <span className="text-purple-400">3000 грн</span>{" "}
          <span className="text-gray-400 text-lg font-normal">/ година</span>
        </p>

        {/* TWO CLEARLY LABELLED BUTTONS */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* PRIMARY: Consultation */}
          <a
            href={TELEGRAM_CONSULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-105"
          >
            <TelegramIcon className="w-5 h-5" />
            ✍️ Записатись на консультацію
          </a>

          {/* SECONDARY: Channel */}
          <a
            href={TELEGRAM_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-400/50 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
          >
            <TelegramIcon className="w-5 h-5 text-sky-400" />
            📢 Підписатись на канал
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 mt-16 animate-bounce text-gray-500 flex flex-col items-center gap-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-6">
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 blur-2xl opacity-50" />
              {/* Card with gradient bg matching landing */}
              <div className="relative rounded-[1.75rem] p-1 bg-gradient-to-br from-purple-600 to-blue-700 shadow-2xl shadow-purple-900/60">
                <div className="relative rounded-[1.5rem] overflow-hidden" style={{width: "288px", height: "340px", background: "linear-gradient(135deg, #3b0764 0%, #1e1b4b 45%, #0f172a 100%)"}}>
                  {/* Decorative glow spots behind photo */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-purple-600/30 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />
                  {/* Photo with transparent background on gradient */}
                  <img
                    src="/images/serhiy-photo.png"
                    alt="Сергій Копач — відеомонтажер і Upwork консультант"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{
                      filter: "drop-shadow(0 8px 32px rgba(139,92,246,0.4))",
                    }}
                  />
                  {/* Subtle gradient at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0533]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              {/* Badge on photo */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-2xl shadow-lg shadow-purple-900/50 border border-purple-400/30">
                ⭐ 3+ роки досвіду
              </div>
              {/* Top left badge */}
              <div className="absolute -top-3 -left-3 bg-[#0d0d14] border border-purple-500/40 text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                🇺🇦 Україна
              </div>
            </div>

            {/* Social buttons under photo */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full max-w-xs">
              <a
                href={TELEGRAM_CONSULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
              >
                <TelegramIcon className="w-4 h-4" />
                Написати мені
              </a>
              <a
                href={TELEGRAM_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
              >
                <TelegramIcon className="w-4 h-4" />
                Мій канал
              </a>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Про мене</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
              Реальний досвід,<br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                а не теорія
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              Я — <strong className="text-white">Сергій Копач</strong>, фрілансер з України. Монтую відео для клієнтів
              з США, спеціалізуюсь на короткому контенті — TikTok, Reels, YouTube Shorts. Працюю на Upwork і Fiverr
              понад 3 роки.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              На консультаціях ділюся тим, що реально працює: як оформити профіль, як писати заявки, як монтувати
              ефективно і продавати послуги дорожче.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Upwork", "Fiverr", "TikTok", "Reels", "Shorts", "США-клієнти"].map((tag) => (
                <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "роки досвіду" },
                { value: "100+", label: "виконаних проєктів" },
                { value: "USA", label: "клієнти з США" },
                { value: "24h", label: "час відповіді" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-purple-500/40 transition-colors">
                  <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-1">
                    {s.value}
                  </div>
                  <div className="text-gray-400 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHANNEL BANNER ─── */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-900/30 to-blue-900/20 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-sky-500/10 blur-2xl" />
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center flex-shrink-0">
                <TelegramIcon className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <p className="text-white font-bold text-base">📢 Telegram-канал Сергія Копача</p>
                <p className="text-sky-300 text-sm">Корисний контент про фріланс, Upwork, монтаж та заробіток онлайн</p>
              </div>
            </div>
            <a
              href={TELEGRAM_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-sky-900/40"
            >
              <TelegramIcon className="w-4 h-4" />
              Підписатись на канал
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 text-center">Послуги</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Що ви отримаєте
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Обирайте напрямок, що вас цікавить — відеомонтаж або робота на Upwork
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1">
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="bg-purple-600/15 border border-purple-500/20 text-purple-300 px-3 py-0.5 rounded-full text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICE ─── */}
      <section className="py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Ціна</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Прозора вартість</h2>

          <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-purple-500/30 rounded-3xl p-10 shadow-xl shadow-purple-900/20">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 blur-sm -z-10" />

            <div className="text-7xl font-black mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              3000
            </div>
            <div className="text-2xl font-bold text-white mb-1">грн</div>
            <div className="text-gray-400 mb-8">за одну годину консультації</div>

            <ul className="text-left space-y-3 mb-10">
              {[
                "Аналіз вашої ситуації до сесії",
                "60 хвилин живої розмови 1-на-1",
                "Конкретний план дій без води",
                "Відповіді на ваші запитання",
                "Підтримка в Telegram після сесії",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-purple-600/40 border border-purple-500/50 flex items-center justify-center text-purple-300 flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Price CTA — consultation only */}
            <a
              href={TELEGRAM_CONSULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full text-lg w-full justify-center transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-purple-900/40"
            >
              <TelegramIcon className="w-6 h-6" />
              ✍️ Записатись на консультацію
            </a>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-20 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 text-center">Відгуки</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Що кажуть клієнти</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white/5 border border-white/10 hover:border-purple-500/30 rounded-2xl p-6 transition-colors">
                <StarRating />
                <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {r.avatar}
                  </div>
                  <span className="text-white font-medium text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3 text-center">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Часті запитання</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <FAQ key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-purple-900/50 to-blue-900/30 border border-purple-500/30 rounded-3xl px-8 py-16 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative z-10">
              <p className="text-5xl mb-6">🚀</p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Готовий стартувати?
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Обирай зручний спосіб зв'язку — запишись на консультацію або підписуйся на мій канал, щоб отримувати корисний контент про фріланс щодня.
              </p>

              {/* TWO CLEARLY SEPARATED ACTIONS */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                {/* Consultation button */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Особиста консультація</span>
                  <a
                    href={TELEGRAM_CONSULT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-900/40"
                  >
                    <TelegramIcon className="w-5 h-5" />
                    ✍️ @Sergey_Kopach
                  </a>
                </div>

                {/* Divider */}
                <div className="hidden sm:flex flex-col items-center gap-1 text-gray-600 text-xs">
                  <div className="w-px h-8 bg-white/10" />
                  або
                  <div className="w-px h-8 bg-white/10" />
                </div>
                <span className="sm:hidden text-gray-600 text-xs">або</span>

                {/* Channel button */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Безкоштовний контент</span>
                  <a
                    href={TELEGRAM_CHANNEL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 hover:border-sky-400 text-sky-300 hover:text-sky-200 font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105"
                  >
                    <TelegramIcon className="w-5 h-5" />
                    📢 Підписатись на канал
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/10 py-10 px-4 text-center text-gray-500 text-sm">
        <p className="mb-4">© {new Date().getFullYear()} Сергій Копач · Відеомонтаж та Upwork консультації · Україна</p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <a
            href={TELEGRAM_CONSULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
          >
            <TelegramIcon className="w-4 h-4" />
            @Sergey_Kopach — консультації
          </a>
          <span className="text-white/10">|</span>
          <a
            href={TELEGRAM_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-medium"
          >
            <TelegramIcon className="w-4 h-4" />
            @serhii_kopach — канал
          </a>
        </div>
      </footer>

    </div>
  );
}
