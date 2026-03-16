import Images from "../atoms/Images";
import { StaticImageData } from "next/image";

interface SwiperBoxProps {
    LogoSwipes: StaticImageData;
}

export default function SwiperBox({ LogoSwipes }: SwiperBoxProps) {
    return (
        /* أضفت خلفية خفيفة جداً وتقليل للشفافية لتحقيق مظهر الـ Luxury */
        <div className="flex justify-center items-center h-28 w-full p-4 ds-rounded-lg ds-bg-alt/50 border border-transparent hover:border-color-secondary/20 hover:ds-bg-form transition-all duration-500 group">
            <div className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <Images 
                    src={LogoSwipes} 
                    className="max-h-20 w-auto object-contain"
                    alt="Client Logo"
                />
            </div>
        </div>
    );
}