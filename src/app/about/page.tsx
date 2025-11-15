import Aboutbody from '@/components/about/Aboutbody'
import HeroSection from '@/components/about/abouthero'
import { SmoothScrollHero } from '@/components/about/SmoothScrollHero'
import React from 'react'

const page = () => {
  return (
    <div>

<HeroSection />
<SmoothScrollHero />
<Aboutbody />



    </div>
  )
}

export default page