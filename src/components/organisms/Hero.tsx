import { hero } from "../../../public/assets/images/images";
import Images from "../atoms/Images";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { useTranslations } from "next-intl";
interface Prop {
    title? : string;
    text? : string;
    buttonText? : string;
}

export default function Hero({title, text , buttonText}: Prop){
    const t = useTranslations()
    return (
        <div className="relative h-screen overflow-hidden">
            {/* صورة الخلفية */}
            <Images src={hero} alt="Hero Image" priority={true} fill={true} className="absolute inset-0 w-full h-full object-cover" />

            
            {/* طبقة شفافة فوق الفيديو */}
            <div className="absolute inset-0 bg-black/50" />

            {/* المحتوى */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Title size="lg">
                    {t("HomePage.Hero.title")}
                </Title>
                <Text size="md" className="mt-4">
                    {t("HomePage.Hero.text")}
                </Text>
                <Button variant="primary" size="lg" className="mt-4">
                    {t("HomePage.Hero.buttonText")}
                </Button>
            </div>
        </div>
    )
}