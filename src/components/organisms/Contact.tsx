'use client';
import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Link from '../atoms/Link'
import { useTranslations } from 'next-intl'
// يمكنك استيراد أيقونات من react-icons أو استخدام SVG مباشرة لتقليل الحجم
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'; 

export default function Contact() {
    const t = useTranslations();

    return (
        <section className='ds-bg-alt/20 py-16 md:py-24'>
            <div className='ds-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                
                {/* الجزء النصي ومعلومات التواصل */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Title className="ds-font-bold ds-text-primary-dark text-3xl md:text-5xl">
                            {t("HomePage.ContactUs.title")}
                        </Title>
                        <div className="w-16 h-1 bg-[#D4AF37] rounded-full" />
                    </div>

                    <Text className="ds-text-secondary-dark ds-text-base md:ds-text-lg max-w-md leading-relaxed">
                        {t("HomePage.ContactUs.text")}
                    </Text>

                    <div className="flex flex-col gap-6 mt-6">
                        {/* رابط الجوال */}
                        <Link 
                            href='tel:+123456789' 
                            className='group flex items-center gap-4 p-4 rounded-xl ds-bg-primary/5 hover:ds-bg-primary transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30 ds-text-primary'
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1A2B48] transition-colors">
                                <FiPhone size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ds-text-disabled font-medium uppercase tracking-wider">{t("HomePage.ContactUs.MobileLabel")}</span>
                                <span className="ds-text-lg ds-font-bold ds-text-primary-dark transition-colors">{t("HomePage.ContactUs.Mobile")}</span>
                            </div>
                        </Link>

                        {/* رابط الإيميل */}
                        <Link 
                            href='mailto:info@example.com' 
                            className='group flex items-center gap-4 p-4 rounded-xl group-hover:ds-bg-primary transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30 ds-text-primary'
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#1A2B48] transition-colors">
                                <FiMail size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ds-text-disabled font-medium uppercase tracking-wider">{t("HomePage.ContactUs.EmailLabel")}</span>
                                <span className="ds-text-lg ds-font-bold ds-text-primary-dark transition-colors">{t("HomePage.ContactUs.Email")}</span>
                            </div>
                        </Link>

                        {/* الموقع الجغرافي */}
                        <div className='group flex items-center gap-4 p-4 rounded-xl ds-bg-primary/5 border border-transparent'>
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                                <FiMapPin size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs ds-text-disabled font-medium uppercase tracking-wider">{t("HomePage.ContactUs.AddressLabel")}</span>
                                <span className="ds-text-lg ds-font-bold ds-text-primary-dark ds-text-primary">{t("HomePage.ContactUs.MAP")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* الجزء الخاص بالخريطة */}
                <div className="relative w-full h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.2833077949363!2d46.671233!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ4LjgiTiA0NiwzMCcxNi40IkU!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa" 
                        className="absolute inset-0 w-full h-full"
                        style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }} // لمسة جمالية للخريطة
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
} 