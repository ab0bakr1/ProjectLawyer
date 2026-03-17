import { X } from "lucide-react";
import NavLogo from "@/components/atoms/navbar/NavLogo";
import NavIconButton from "@/components/atoms/navbar/NavIconButton";

export default function MobileNavHeader({ onClose }: { onClose: () => void }) {
  return (
    /* px-4 و justify-between ستنعكس تلقائياً بفضل dir=rtl في html */
    <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
      <NavLogo size="lg" />
      <NavIconButton onClick={onClose}>
        {/* تغيير لون الأيقونة للذهبي لزيادة الوضوح كما طلب العميل */}
        <X size={35} className="text-[#D4AF37] hover:scale-110 transition-transform" />
      </NavIconButton>
    </div>
  );
}