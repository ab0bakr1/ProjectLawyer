'use client';
import React from 'react';
import Heading from "../molecules/Heading";
// استيراد المكونات الأساسية من المكتبة
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// تأكد من استيراد التنسيقات في ملفك الرئيسي أو هنا
import 'swiper/css';
import SwiperBox from '../molecules/SwiperBox';

export default function Swipers() {
    // مصفوفة البيانات (اللوقوهات) - يمكنك وضعها في ملف منفصل لاحقاً
    const logos = [
        { id: 1, alt: "Client 1" },
        { id: 2, alt: "Client 2" },
        { id: 3, alt: "Client 3" },
        { id: 4, alt: "Client 4" },
        { id: 5, alt: "Client 5" },
        { id: 6, alt: "Client 6" },
    ];

    return (
        <div className="ds-bg ds-container py-12">
            {/* مكون العنوان الخاص بك */}
            <Heading />

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                className="max-w-6xl mx-auto px-4 mt-10"
            >
                {logos.map((logo) => (
                    <SwiperSlide key={logo.id}>
                        <SwiperBox />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}