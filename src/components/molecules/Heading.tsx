import Title from "../atoms/Title";
import { useTranslations } from "next-intl";

export default function Heading() {
    const t = useTranslations();
    return (
        <div className="flex flex-col items-center justify-center mb-10">
            {/* خط تمييز صغير فوق العنوان ليعطي طابعاً عصرياً */}
            <span className="w-12 h-1 ds-bg-primary-300 rounded-full mb-4"></span>
            
            <div className="flex flex-wrap items-center justify-center gap-2">
                <Title
                    variant="black"
                    className="ds-font-bold ds-text-xl sm:ds-text-2xl lg:ds-text-3xl"
                    center={true}
                >
                    {t("HomePage.customers.title")}
                </Title>
                <Title 
                    variant="primary" 
                    className="ds-font-bold ds-text-xl sm:ds-text-2xl lg:ds-text-3xl ds-text-alt"
                >
                    {t("HomePage.customers.TitleSpan")}
                </Title>
            </div>
        </div>
    );
}