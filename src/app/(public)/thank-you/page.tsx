import Link from "next/link";
import { useTranslations } from "next-intl";
import PublicLayout from "@/components/layout/PublicLayout";

export default function ThankYouPage() {
  const t = useTranslations("HomePage");

  return (
    <PublicLayout>
      <section className="min-h-screen ds-bg-primary flex items-center justify-center px-4 relative overflow-hidden">

        {/* خلفية زخرفية */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37]/5 blur-2xl" />
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/3 blur-2xl" />
          {/* خطوط زخرفية */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center">

          {/* أيقونة النجاح */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              {/* الدائرة الخارجية المتحركة */}
              <div className="w-32 h-32 rounded-full border-2 border-[#D4AF37]/30 animate-ping absolute inset-0" />
              <div className="w-32 h-32 rounded-full border border-[#D4AF37]/20 absolute inset-0" />
              {/* الدائرة الداخلية */}
              <div className="w-32 h-32 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center relative">
                <svg
                  className="w-14 h-14 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* الخط الذهبي الفاصل */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* العنوان */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("ThankYou.title")}
          </h1>

          {/* النص */}
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto mb-12">
            {t("ThankYou.text")}
          </p>

          {/* بطاقة المعلومات */}
          <div className="bg-white/5 border border-[#D4AF37]/20 rounded-2xl p-6 mb-10 text-start">
            <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-4">
              {t("ThankYou.nextSteps")}
            </p>
            <ul className="space-y-3">
              {[
                t("ThankYou.step1"),
                t("ThankYou.step2"),
                t("ThankYou.step3"),
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0 text-[#D4AF37] text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* زر العودة */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#1A2B48] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 active:scale-95"
          >
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t("ThankYou.backHome")}
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}