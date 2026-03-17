import { useTranslations } from "next-intl";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

export default function Form() {
    const t = useTranslations();
    
    return (
        <form className="p-2 sm:p-6 flex flex-col gap-5">
            {/* 1. حل مشكلة النصوص السوداء: تحويلها للأبيض/الفاتح */}
            <Title className="ds-font-bold text-white mb-2" size={"xl"}>
                {t("HomePage.Form.title")}
            </Title>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="ds-text-sm ds-font-medium ds-text-disabled">
                        {t("HomePage.Form.YourName")}
                    </label>
                    <Input
                        type="text"
                        id="name"
                        placeholder={t("HomePage.Form.YourNamePlaceholder")}
                        /* 2. حل مشكلة اختفاء الأطراف: إضافة حدود فاتحة أو خلفية أفتح قليلاً */
                        className="bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 text-white placeholder:ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="ds-text-sm ds-font-medium ds-text-disabled">
                        {t("HomePage.Form.Email")}
                    </label>
                    <Input
                        type="email"
                        id="email"
                        placeholder={t("HomePage.Form.EmailPlaceholder")}
                        className="bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 text-white placeholder:ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <Text className="ds-text-sm ds-font-medium ds-text-disabled mb-1">
                    {t("HomePage.Form.YourSpecialization")}
                </Text>
                <div className="relative">
                    <select
                        name="case_type"
                        /* تحسين لون القائمة المنسدلة لتناسب الخلفية الزرقاء */
                        className="w-full bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none appearance-none cursor-pointer"
                        defaultValue=""
                    >
                        <option value="" disabled className="text-black">{t("HomePage.Form.selectOption")}</option>
                        <option value="civil" className="text-black">{t("HomePage.Form.civil")}</option>
                        <option value="criminal" className="text-black">{t("HomePage.Form.criminal")}</option>
                        <option value="commercial" className="text-black">{t("HomePage.Form.commercial")}</option>
                    </select>
                    <div className="absolute inset-y-0 ltr:right-4 rtl:left-4 flex items-center pointer-events-none ds-text-disabled">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="text" className="ds-text-sm ds-font-medium ds-text-disabled">
                    {t("HomePage.Form.YourMessage")}
                </label>
                <textarea
                    id="text"
                    placeholder={t("HomePage.Form.YourMessagePlaceholder")}
                    className="bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 text-white placeholder:ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none min-h-[150px] resize-y"
                />
            </div>

            {/* 3. حل مشكلة نص الزر: تغيير لون النص إلى الأزرق الغامق ليبرز فوق الذهبي */}
            <Button
                type="submit"
                className="mt-2 ds-bg-secondary ds-text-primary ds-font-bold py-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.4)] active:scale-95 shadow-lg"
            >
                {t("HomePage.Form.submit")}
            </Button>
        </form>
    );
}