import { useTranslations } from "next-intl";
import Images from "../atoms/Images";
import Form from "../molecules/Form";
import Title from "../atoms/Title";

export default function FormNow() {
    const t = useTranslations();
    
    return (
        <section className="py-20 ds-bg-alt">
            <div className="ds-container">
                <div className="mb-12">
                    <Title variant="black" className="ds-font-bold text-center ds-text-2xl sm:ds-text-4xl">
                        {t("HomePage.Form.FormNowTitle")}
                    </Title>
                    <div className="w-20 h-1.5 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden ds-rounded-2xl shadow-2xl">
                    {/* قسم الصورة - يأخذ 5 أعمدة */}
                    <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                        <Images 
                            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1470" 
                            alt="Contact Us" 
                            fill
                            className="object-cover" 
                        />
                        {/* Overlay لربط الصورة بهوية الموقع */}
                        <div className="absolute inset-0 bg-[#1A2B48]/20" />
                    </div>

                    {/* قسم الفورم - يأخذ 7 أعمدة */}
                    <div className="lg:col-span-7 ds-bg-primary p-4 sm:p-8 lg:p-12">
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
}