'use client';
import React from 'react'
import { useTranslations } from 'next-intl'
import { DataFields } from '../../utils/data'
import Icon from '../atoms/Icon';
import Box from '../molecules/Box';
import Title from '../atoms/Title';
import Text from '../atoms/Text';

export default function Fields() {
    const t = useTranslations();

    return (
        <section className='py-20 ds-bg overflow-hidden'>
            <div className="ds-container">
                <div className="mb-12">
                    <Title center={true} className="ds-text-xl sm:ds-text-3xl text-white ds-font-bold">
                        {t("HomePage.fields.title")}
                    </Title>
                    <div className="w-16 h-1 ds-bg-secondary mx-auto mt-3 rounded-full" />
                    <Text center={true} className="text-white/60 mt-4 max-w-2xl mx-auto">
                        {t("HomePage.fields.text")}
                    </Text>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {DataFields.map((field) => (
                        <div 
                            key={field.id} 
                            className="group flex flex-col justify-center items-center ds-bg-primary-600 p-8 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
                        >
                            {/* تأثير إضاءة خفي عند التحويم */}
                            <div className="absolute -right-10 -top-10 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/15 transition-all duration-500" />

                            <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
                                <Icon 
                                    IconComponent={field.icon} 
                                    size={42} 
                                    /* تغيير لون الأيقونة لتناسب الخلفية الداكنة */
                                    className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>

                            <Box title={field.title} text={field.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}