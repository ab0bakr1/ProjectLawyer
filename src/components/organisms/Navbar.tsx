"use client";
import { useEffect, useState } from "react";
import { ListMinus } from "../../../public/assets/icons/icons";
import { Routes } from "@/utils/routes";
import { cn } from "../../lib/cn";
import NavLogo from "../atoms/navbar/NavLogo";
import NavIconButton from "../atoms/navbar/NavIconButton";
import DesktopNavLinks from "../molecules/navbar/DesktopNavLinks";
import MobileNavHeader from "../molecules/navbar/MobileNavHeader";
import MobileNavLinks from "../molecules/navbar/MobileNavLinks";
import Button from "../atoms/Button";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const t = useTranslations();

  const mainRoutes = Routes.filter((r) => r.id <= 4);
  const dropdownRoutes = Routes.filter((r) => r.id > 4);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNavbar = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  return (
    /* تم استبدال left-0 right-0 بـ inset-x-0 ليدعم RTL تلقائياً */
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center p-6 transition-all duration-500">
      <nav
        className={cn(
            "flex items-center justify-between px-6 py-3 transition-all duration-700 ease-in-out",
            "w-full max-w-6xl rounded-full border border-white/20 shadow-lg",
            "bg-black/30 backdrop-blur-xl", 
            isScrolled ? "scale-95 ds-bg-primary-900/40" : "scale-100"
          )}
      >
        {/* ds-container تضمن محاذاة اللوجو والروابط حسب اللغة */}
        <div className="mx-auto flex items-center justify-between py-2 w-full ds-container">
          <NavLogo />

          <DesktopNavLinks
            mainRoutes={mainRoutes}
            dropdownRoutes={dropdownRoutes} 
            dropdownOpen={dropdownOpen}
            toggleDropdown={() => setDropdownOpen((p) => !p)}
            closeNavbar={closeNavbar}
          />

          <div className="hidden md:block">
            {/* استخدام اللون الذهبي من السيستم ديزاين للزر لجذب الانتباه */}
            <Button className="ds-bg-secondary text-[#1A2B48] ds-font-bold px-6 py-2 ds-rounded-full hover:scale-105 transition-transform">
              {t("HomePage.Navbar.CTA")}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <NavIconButton onClick={() => setOpen(true)}>
              {/* تغيير لون الأيقونة لتكون أوضح في الجوال */}
              <ListMinus size={30} className="text-[#D4AF37]" />
            </NavIconButton>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            /* استخدام inset-y-0 و inset-inline-0 لضمان خروج القائمة من الجهة الصحيحة */
            "ds-bg-primary fixed inset-y-0 inset-x-10 inset-inline-100 z-[100] h-screen w-full transition-transform duration-500 md:hidden",
            /* translate-x-full في RTL تعني الخروج لليسار وفي LTR تعني الخروج لليمين */
            open ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full",
          )}
        >
          <MobileNavHeader onClose={closeNavbar} />
          <div className="mt-8">
            <MobileNavLinks
              mainRoutes={mainRoutes}
              dropdownRoutes={dropdownRoutes}
              dropdownOpen={dropdownOpen}
              toggleDropdown={() => setDropdownOpen((p) => !p)}
              closeNavbar={closeNavbar}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}