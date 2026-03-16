import { hero } from "../../../public/assets/images/images";
import Images from "../atoms/Images";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { useTranslations } from "next-intl";

interface Prop {
    title?: string;
    text?: string;
    buttonText?: string;
}

export default function Hero({ title, text, buttonText }: Prop) {
    const t = useTranslations();

    return (
        <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
            {/* الخلفية مع تحسين الأداء */}
            <div className="absolute inset-0 z-0">
                <Images 
                    src={hero} 
                    alt="Hero Background" 
                    priority 
                    fill 
                    className="object-cover object-center scale-105" // إضافة scale بسيط ليعطي عمق
                />
                {/* الطبقة الشفافة - استخدمت تدرجاً ليعطي فخامة أكثر */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-[#1A2B48]/60" />
            </div>

            {/* المحتوى - معالجة التمركز والتجاوب */}
            <div className="ds-container relative z-10 text-center px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-y-6">
                    
                    {/* العنوان: تصغير الخط في الشاشات الصغيرة جداً (iPhone القديم) */}
                    <Title 
                        className="ds-font-heading ds-text-primary-dark leading-[1.1] text-[1.75rem] xs:text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl ds-text-secondary-alt"
                    >
                        {t("HomePage.Hero.title")}
                    </Title>

                    {/* الوصف: استخدام متغيرات التباعد واللون الثانوية من السيستم */}
                    <Text 
                        className="ds-text-secondary-dark max-w-2xl mx-auto ds-text-sm sm:ds-text-base md:ds-text-lg opacity-90 ds-text-secondary-alt"
                    >
                        {t("HomePage.Hero.text")}
                    </Text>

                    {/* الأزرار: إضافة الحركة والتفاعل */}
                    <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <Button 
                            variant="primary" 
                            className="ds-bg-primary ds-text-primary-dark hover:scale-105 active:scale-95 transition-transform duration-300 px-8 py-3 rounded-full shadow-lg"
                        >
                            {t("HomePage.Hero.buttonText")}
                        </Button>
                    </div>
                </div>
            </div>

            {/* سهم مؤشر للأسفل لتعزيز تجربة المستخدم (اختياري) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
}