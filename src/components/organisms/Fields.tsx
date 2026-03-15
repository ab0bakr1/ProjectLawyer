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
    <section className= 'ds-container py-12'>
        <Title center={true} size="xl">
            Lorem ipsum dolor sit amet.
        </Title>
        <Text center={true} variant="disabled">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod error soluta!
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
            {DataFields.map((field)=>(
                <div key={field.id} className="flex flex-col justify-center items-center ds-bg-alt p-7 ds-shadow-md gap-4 ds-rounded-md ds-borderDot-md">
                    <Icon IconComponent={field.icon} size={40} color="black" />
                    <Box title={field.title} text={field.text} />
                </div>
            ))}
        </div>
    </section>
  )
}
