"use client";
import { useEffect } from "react";
import { Locale, useLocale } from "next-intl";
import { cn } from "@/lib/cn";

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

export default function LocaleSwitcher({ changeLocaleAction }: Props) {
  const locale = useLocale();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      onClick={() => changeLocaleAction(nextLocale)}
      className={cn(`
        fixed
        bottom-6
        /* حل ملاحظة العميل: استخدام end بدلاً من right ليتغير مكانه تلقائياً */
        inset-split-end-6 
        ltr:right-6 rtl:left-6
        
        /* التصميم: جعل الزر أكثر فخامة ووضوحاً */
        w-14 h-14
        rounded-full
        ds-bg-primary
        border-2 border-[#D4AF37]/30
        text-[#D4AF37]
        ds-font-bold
        flex flex-col items-center justify-center
        shadow-[0_10px_30px_rgba(26,43,72,0.4)]
        hover:scale-110 hover:ds-bg-secondary hover:text-[#D4AF37]
        active:scale-95
        transition-all duration-300
        z-[999]
        group
      `)}
      aria-label="Change Language"
    >
      {/* أيقونة بسيطة مع النص لزيادة الوضوح */}
      <span className="text-[10px] opacity-70 group-hover:text-[#D4AF37]">
        {locale === "en" ? "العربية" : "English"}
      </span>
      <span className="text-sm font-extrabold uppercase tracking-tighter">
        {locale === "en" ? "AR" : "EN"}
      </span>
      
      {/* تأثير نبض (Pulse) لجذب الانتباه في أول زيارة */}
      <span className="absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping -z-10 group-hover:hidden" />
    </button>
  );
}