'use client';
import React from 'react';
import Heading from "../molecules/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SwiperBox from '../molecules/SwiperBox';
import { Logo2, LogoSwiper, LogoSwiper1, LogoSwiper2, LogoSwiper4, LogoSwiper5 } from "../../../public/assets/images/images";

export default function Swipers() {
    const logos = [
        { id: 1, alt: "Client 1", LogoSwipersIMG: Logo2 },
        { id: 2, alt: "Client 2", LogoSwipersIMG: LogoSwiper },
        { id: 3, alt: "Client 3", LogoSwipersIMG: LogoSwiper1 },
        { id: 4, alt: "Client 4", LogoSwipersIMG: LogoSwiper2 },
        { id: 5, alt: "Client 5", LogoSwipersIMG: LogoSwiper5 },
        { id: 6, alt: "Client 6", LogoSwipersIMG: LogoSwiper4 },
    ];

    return (
        <section className="ds-bg py-16 sm:py-24">
            <div className="ds-container">
                <Heading />

                <div className="mt-12">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        dir="rtl" // لضمان اتجاه الحركة الصحيح مع اللغة العربية
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 3, spaceBetween: 25 },
                            768: { slidesPerView: 4, spaceBetween: 30 },
                            1024: { slidesPerView: 5, spaceBetween: 40 },
                        }}
                        className="pb-8"
                    >
                        {logos.map((logo) => (
                            <SwiperSlide key={logo.id}>
                                <SwiperBox LogoSwipes={logo.LogoSwipersIMG} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}