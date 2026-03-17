import React from 'react'
import NumberCom from '../molecules/NumberCom'
import { NumberData } from '../../utils/data'

export default function Numbers() {
    return (
        /* استخدام خلفية فاتحة قليلاً من السيستم ليفصل بين الأقسام */
        <section className="py-20 ds-bg-alt/30 border-y border-gray-100">
            <div className="ds-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
                    {NumberData.map((num) => (
                        <div 
                            key={num.id} 
                            /* حل مشكلة الـ RTL: 
                               استخدام border-inline-end (تظهر يمين في العربي ويسار في الإنجليزي)
                               وإخفاؤها في آخر عنصر، وفي الجوال تتحول الحدود لأسفل 
                            */
                            className={`
                                relative
                                flex justify-center
                                lg:border-e lg:last:border-e-0 border-gray-200
                                sm:even:border-e-0 lg:even:border-e
                                max-sm:border-b max-sm:last:border-b-0 max-sm:pb-6 max-sm:mb-6
                            `}
                        >
                            <NumberCom 
                                number={num.number} 
                                text={num.title} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}