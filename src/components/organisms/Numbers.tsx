import React from 'react'
import NumberCom from '../molecules/Number' // تأكد من المسار الصحيح لمكون العداد الذي صنعناه
import {Number} from '../../utils/data'

export default function Numbers() {

    return (
        <section className="py-16 ds-bg">
            <div className="max-w-7xl mx-auto px-4">
                {/* شبكة عرض الأرقام باستخدام Tailwind */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Number.map((num) => (
                        <div key={num.id} className="border-r last:border-none border-gray-100">
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