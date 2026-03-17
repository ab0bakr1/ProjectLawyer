import NavLink from "../../atoms/navbar/NavLink";
import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";

interface RouteItem {
  id: number;
  path: string;
  key: string;
}

interface MobileNavLinksProps {
  mainRoutes: RouteItem[];
  dropdownRoutes: RouteItem[];
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  closeNavbar: () => void;
}

export default function MobileNavLinks({
  mainRoutes,
  closeNavbar,
}: MobileNavLinksProps) {
  const t = useTranslations("HomePage.Navbar");

  return (
    /* ps-8 (Padding Start) تضمن انعكاس المسافة الجانبية بين اللغتين */
    <div className="flex flex-col items-start ps-8 pe-8 py-10 gap-8">
      <ul className="text-white flex flex-col items-start gap-6 text-2xl font-bold">
        {mainRoutes.map((item) => (
          <li key={item.id} className="w-full">
            <NavLink
              to={item.path}
              onClick={closeNavbar}
              /* تأكدنا من أن المحاذاة تبدأ من البداية المنطقية start */
              className="block w-full text-start hover:text-[#D4AF37]"
            >
              {t(item.key)}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}