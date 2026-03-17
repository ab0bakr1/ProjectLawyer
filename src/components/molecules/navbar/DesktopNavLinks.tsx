import NavLink from "@/components/atoms/navbar/NavLink";
import { useTranslations } from "next-intl";

export interface NavRoute {
  id: number;
  path: string;
  key: string;
}

interface DesktopNavLinksProps {
  mainRoutes: NavRoute[];
  dropdownRoutes: NavRoute[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}

export default function DesktopNavLinks({ mainRoutes }: DesktopNavLinksProps) {
    const t = useTranslations("HomePage.Navbar");
  return (
    /* استخدام gap-8 يضمن تباعداً متساوياً ينعكس تلقائياً في الـ RTL */
    <ul className="hidden md:flex items-center gap-8 text-white ds-text-sm ds-font-bold uppercase tracking-wide">
      {mainRoutes.map((item) => (
        <li key={item.id}>
          <NavLink to={item.path} className="hover:text-[#D4AF37] transition-colors ds-text-lg">
            {t(item.key)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}