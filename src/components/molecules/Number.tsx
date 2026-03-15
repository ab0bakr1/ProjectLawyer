'use client';
import React, { useEffect, useState } from 'react'
import Text from '../atoms/Text'
import { useTranslations } from 'next-intl'
interface Props {
    text : string;
    number : number;
}

export default function Number({text , number}: Props) {
    const [count, setCount] = useState(0);
    const t = useTranslations();
    useEffect(() => {
        let start = 0;
        // تحديد سرعة العداد بناءً على الرقم المستهدف (ليكون الانتهاء متزامناً تقريباً)
        const duration = 2000; // مدة الحركة بالملي ثانية (2 ثانية)
        const increment = Math.ceil(number / (duration / 16)); // 16ms هي تقريباً مدة الفريم الواحد

        const timer = setInterval(() => {
            start += increment;
            if (start >= number) {
                setCount(number);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer); // تنظيف الذاكرة عند إغلاق المكون
    }, [number]);
  return (
    <div className='flex flex-col items-center p-4'>
        <Text size={"md"} variant={"primary"} className='font-bold'>
            {t(text)}
        </Text>
        <div>
            <Text size={"lg"} variant={"primary"}>
                {count}+
            </Text>
        </div>
    </div>
  )
}
