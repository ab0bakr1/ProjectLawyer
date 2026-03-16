import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Link from '../atoms/Link'
import { useTranslations } from 'next-intl'


export default function Contact() {
    const t = useTranslations();
  return (
    <section className='ds-container grid grid-cols-1 lg:grid-cols-2 gap-4 py-12'>
        <div className="flex flex-col gap-3 py-12">
            <Title size="lg" variant="primary">
                {t("HomePage.ContactUs.title")}
            </Title>
            <Text size="md" variant="disabled">
                {t("HomePage.ContactUs.text")}
            </Text>
            <div className="flex flex-col gap-8 mt-8">
                <Link href='#' target="_blank" className='ds-text-lg ds-text-primary'>
                    {t("HomePage.ContactUs.Mobile")}
                </Link>
                <Link href='#' target="_blank" className='ds-text-lg ds-text-primary'>
                    {t("HomePage.ContactUs.Email")}
                </Link>
                <Link href='#' className='ds-text-lg ds-text-primary'>
                    {t("HomePage.ContactUs.MAP")}
                </Link>
            </div>
        </div>
        <div className="flex justify-center items-center ds-bg-primary">
            <Title size="xl" center={true}>
                MAP
            </Title>
        </div>
    </section>
  )
}
