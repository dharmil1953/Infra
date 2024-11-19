import React from 'react'
import architectural from "../assets/Portfolio/architectural.PNG"
import BrandCom from "../assets/Portfolio/brand-comm.PNG"
import Builders from "../assets/Portfolio/Builders.PNG"
import CFM from "../assets/Portfolio/CFM.PNG"
import masters from "../assets/Portfolio/masters.PNG"
import schluter from "../assets/Portfolio/schluter.PNG"
import TandA from "../assets/Portfolio/T&A.PNG"
import Wedi from "../assets/Portfolio/Wedi.PNG"
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <Image src={architectural} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={BrandCom} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={Builders} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={CFM} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={masters} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={schluter} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={TandA} alt="partner" width={175} height={175} className="object-contain" />
        <Image src={Wedi} alt="partner" width={175} height={175} className="object-contain" />
      </div>
    </div>
  )
}

export default PortfolioSection
