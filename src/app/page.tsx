import BottleFeatures from '@/components/BottleFeatures'
import FooterSection from '@/components/FooterSection'
import LandingSection from '@/components/LandingSection'
import ProductSection from '@/components/ProductSection'
import FooterScrollSection from '@/components/FooterScrollSection'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
      <LandingSection />
      <BottleFeatures/>
      <ProductSection/>
      <FooterScrollSection/>
      <FooterSection/>
    </>
  )
}

export default Page