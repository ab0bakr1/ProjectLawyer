'use client';
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Title from "../atoms/Title";

type Status = "idle" | "loading" | "error";

export default function Form() {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();

    const [status, setStatus] = useState<Status>("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        caseType: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed");

            // ✅ التحويل لصفحة الشكر مع اللغة الحالية
            router.push(`/${locale}/thank-you`);

        } catch {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-2 sm:p-6 flex flex-col gap-5">
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("HomePage.Form.YourNamePlaceholder")}
                        className="bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 text-white placeholder:ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="ds-text-sm ds-font-medium ds-text-disabled">
                        {t("HomePage.Form.Email")}
                    </label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("HomePage.Form.EmailPlaceholder")}
                        className="bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 text-white placeholder:ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <Text className="ds-text-sm ds-font-medium ds-text-disabled mb-1">
                    {t("HomePage.Form.YourSpecialization")}
                </Text>
                <div className="relative">
                    <select
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none appearance-none cursor-pointer"
                    >
                        <option value="" disabled className="text-black">
                            {t("HomePage.Form.selectOption")}
                        </option>
                        <option value="civil" className="text-black">
                            {t("HomePage.Form.civil")}
                        </option>
                        <option value="criminal" className="text-black">
                            {t("HomePage.Form.criminal")}
                        </option>
                        <option value="commercial" className="text-black">
                            {t("HomePage.Form.commercial")}
                        </option>
                    </select>
                    <div className="absolute inset-y-0 ltr:right-4 rtl:left-4 flex items-center pointer-events-none ds-text-disabled">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="ds-text-sm ds-font-medium ds-text-disabled">
                    {t("HomePage.Form.YourMessage")}
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("HomePage.Form.YourMessagePlaceholder")}
                    className="bg-white/10 border border-white/20 ds-rounded-md px-4 py-3 text-white placeholder:ds-text-disabled focus:ring-2 focus:ring-[#D4AF37] transition-all outline-none min-h-[150px] resize-y"
                    required
                />
            </div>

            {/* رسالة الخطأ فقط */}
            {status === "error" && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-md px-4 py-3">
                    <span className="text-red-400 text-sm">❌ حدث خطأ في الإرسال، يرجى المحاولة مجدداً.</span>
                </div>
            )}

            <Button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 ds-bg-secondary ds-text-primary ds-font-bold py-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(212,175,55,0.4)] active:scale-95 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "loading" ? "⏳ جاري الإرسال..." : t("HomePage.Form.submit")}
            </Button>
        </form>
    );
}