'use client';
import React from "react";
import { useTranslations } from "next-intl";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "../../../public/assets/icons/icons";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ds-bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="ds-container">
        {/* الجزء العلوي: الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* القسم 1: الهوية والنبذة */}
          <div className="space-y-6 flex flex-col items-start">
            <h3 className="text-2xl ds-font-heading ds-font-bold text-[#D4AF37] tracking-tight">
              {t("HomePage.Navbar.Home")} 
            </h3>
            <p className="ds-text-sm text-white/70 leading-relaxed max-w-xs">
              مكتب محاماة رائد يسعى لتقديم أجود الخدمات القانونية والشرعية 
              بأعلى معايير المهنية والنزاهة لحماية حقوق عملائنا.
            </p>
            {/* أيقونات التواصل الاجتماعي بتأثير عصري */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#1A2B48] transition-all duration-300 shadow-lg"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* القسم 2: روابط سريعة - مع الحفاظ على المسافات في RTL */}
          <div className="flex flex-col items-start">
            <h4 className="ds-text-lg ds-font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-10 after:h-1 after:bg-[#D4AF37]">
              روابط سريعة
            </h4>
            <ul className="space-y-4 ds-text-sm">
              {[
                { label: "HomePage.Navbar.Home", href: "/" },
                { label: "HomePage.Navbar.About", href: "/about" },
                { label: "HomePage.Navbar.Advantages", href: "/pricing" },
                { label: "HomePage.Navbar.Contact", href: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-white/60 hover:text-[#D4AF37] hover:ps-2 transition-all duration-300 block">
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم 3: التخصصات القانونية */}
          <div className="flex flex-col items-start">
            <h4 className="ds-text-lg ds-font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-10 after:h-1 after:bg-[#D4AF37]">
              تخصصاتنا
            </h4>
            <ul className="space-y-4 ds-text-sm">
              {["civil", "criminal", "commercial"].map((field, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white/60 hover:text-[#D4AF37] hover:ps-2 transition-all duration-300 block">
                    {t(`HomePage.Form.${field}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم 4: معلومات التواصل - استخدام كلاسات منطقية (start) */}
          <div className="flex flex-col items-start">
            <h4 className="ds-text-lg ds-font-bold mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-10 after:h-1 after:bg-[#D4AF37]">
              اتصل بنا
            </h4>
            <ul className="space-y-5 ds-text-sm">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 text-[#D4AF37] group-hover:scale-110 transition-transform"><MapPin size={20} /></div>
                <span className="text-white/70 leading-snug">الرياض، حي الملقا، طريق الملك فهد</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform"><Phone size={20} /></div>
                <span className="text-white/70 font-medium tracking-wide" dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform"><Mail size={20} /></div>
                <span className="text-white/70">info@lawfirm.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* الجزء السفلي: حقوق النشر */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-white/40">
          <p className="text-center md:text-start">
            © {currentYear} جميع الحقوق محفوظة لشركة المحاماة.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-tight">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-tight">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}