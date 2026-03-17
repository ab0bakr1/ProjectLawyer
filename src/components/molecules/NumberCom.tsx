'use client';
import React, { useEffect, useState, useRef } from 'react'
import Text from '../atoms/Text'
import { useTranslations } from 'next-intl'

interface Props {
    text: string;
    number: number;
}

export default function NumberCom({ text, number }: Props) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const t = useTranslations();

    // 1. مراقبة ظهور القسم على الشاشة
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // ابدأ العد عند الرؤية
                }
            },
            { threshold: 0.3 } // يبدأ عندما يظهر 30% من القسم
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 2. منطق العداد (لا يعمل إلا إذا كان isVisible true)
    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(number / (duration / 16));

        const timer = setInterval(() => {
            start += increment;
            if (start >= number) {
                setCount(number);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [number, isVisible]);

    return (
        <div 
            ref={containerRef} 
            className={`flex flex-col items-center p-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold ds-font-heading text-[#D4AF37]">
                    {count}
                </span>
                <span className="text-2xl font-bold text-[#D4AF37]">+</span>
            </div>
            
            <Text className='mt-2 font-bold ds-text-primary-dark opacity-90 ds-text-sm md:ds-text-base text-center'>
                {t(text)}
            </Text>
        </div>
    )
}