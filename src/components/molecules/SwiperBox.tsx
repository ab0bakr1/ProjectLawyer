import { LogoSwiper } from "../../../public/assets/images/images";
import Images from "../atoms/Images";

export default function SwiperBox() {
    return (
        <div className="flex justify-center items-center h-24 grayscale hover:grayscale-0 transition duration-300">
            <Images 
                src={LogoSwiper} 
                className="max-h-full max-w-full object-contain"
                alt="Swiper Logo"
                width={80}
                height={80}
            />
        </div>
    );
}