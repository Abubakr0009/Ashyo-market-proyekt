import HeaderForm from '@/components/HeaderForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderCenterActions from './HeaderCenterActions'

const HeaderCenter = () => {
  return (
    <div className="flex items-center justify-between containers !py-[30px]">
        <Link className='flex items-center translate-x-[-6px]' href={'/'}>
            <Image className='w-[48px] h-[48px] scale-[1.5]' src={'/Logo.svg'} alt='Logo' width={48} height={48} priority/>
            <span className='translate-x-[-5px] text-[#134E9B] text-[36px] leading-[100%] font-black'>Ashyo</span>
        </Link>
      <HeaderForm/>
      <HeaderCenterActions/>
    </div>
  )
}

export default HeaderCenter