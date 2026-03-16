import React from "react";
import { useTranslations } from "next-intl";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "../../../public/assets/icons/icons";

export default function Footer() {
  const t = useTranslations(); // افترضت وجود قسم Footer في ملفات الترجمة

  return (
    <footer className="ds-bg-primary text-white pt-16 pb-8">
      <div className="ds-container">
        {/* الجزء العلوي: الأقسام الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* القسم 1: نبذة عن الشركة */}
          <div className="space-y-6">
            <h3 className="ds-text-xl ds-font-bold text-[#D4AF37]"> {/* اللون الذهبي من فاريابلز */}
              {t("HomePage.Navbar.Home")} {/* يمكنك استبداله بلوقو المكتب */}
            </h3>
            <p className="ds-text-sm opacity-80 leading-relaxed">
              مكتب محاماة رائد يسعى لتقديم أجود الخدمات القانونية والشرعية 
              بأعلى معايير المهنية والنزاهة لحماية حقوق عملائنا.
            </p>
            <div className="flex gap-4">
              <a href="#" className="ds-hover hover:text-[#D4AF37]"><Facebook size={20} /></a>
              <a href="#" className="ds-hover hover:text-[#D4AF37]"><Twitter size={20} /></a>
              <a href="#" className="ds-hover hover:text-[#D4AF37]"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* القسم 2: روابط سريعة */}
          <div>
            <h4 className="ds-text-lg ds-font-bold mb-6 border-b-2 border-[#D4AF37] w-fit pb-2">
              روابط سريعة
            </h4>
            <ul className="space-y-4 ds-text-sm">
              <li><a href="/" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Navbar.Home")}</a></li>
              <li><a href="/about" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Navbar.About")}</a></li>
              <li><a href="/pricing" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Navbar.Advantages")}</a></li>
              <li><a href="/contact" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Navbar.Contact")}</a></li>
            </ul>
          </div>

          {/* القسم 3: التخصصات القانونية */}
          <div>
            <h4 className="ds-text-lg ds-font-bold mb-6 border-b-2 border-[#D4AF37] w-fit pb-2">
              تخصصاتنا
            </h4>
            <ul className="space-y-4 ds-text-sm">
              <li><a href="#" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Form.civil")}</a></li>
              <li><a href="#" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Form.criminal")}</a></li>
              <li><a href="#" className="ds-hover opacity-80 hover:opacity-100">{t("HomePage.Form.commercial")}</a></li>
            </ul>
          </div>

          {/* القسم 4: معلومات التواصل */}
          <div>
            <h4 className="ds-text-lg ds-font-bold mb-6 border-b-2 border-[#D4AF37] w-fit pb-2">
              اتصل بنا
            </h4>
            <ul className="space-y-4 ds-text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4AF37]" />
                <span className="opacity-80">الرياض، حي الملقا، طريق الملك فهد</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37]" />
                <span className="opacity-80" dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37]" />
                <span className="opacity-80">info@lawfirm.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* الجزء السفلي: حقوق النشر */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:row items-center justify-between gap-4 text-xs opacity-60 font-light">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لشركة المحاماة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">سياسة الخصوصية</a>
            <a href="#" className="hover:underline">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}