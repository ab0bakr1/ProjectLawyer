import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import Link from '../atoms/Link'

export default function Contact() {
  return (
    <section className='ds-container grid grid-cols-1 lg:grid-cols-2 gap-4 py-12'>
        <div className="flex flex-col gap-3 py-12">
            <Title size="lg" variant="primary">
                Lorem ipsum dolor sit.
            </Title>
            <Text size="md" variant="disabled">
                Lorem ipsum dolor sit amet consectetur.
            </Text>
            <div className="flex flex-col gap-8 mt-8">
                <Link href='#' target="_blank" className='ds-text-lg ds-text-primary'>
                    +966500000000
                </Link>
                <Link href='#' target="_blank" className='ds-text-lg ds-text-primary'>
                    lorem@gmail.com
                </Link>
                <Link href='#' className='ds-text-lg ds-text-primary'>
                    Suadi Arabia, Jeddah
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
