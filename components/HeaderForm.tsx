import React from 'react'
import Button from './Button'
import { ArrowDownIcon, SearchIcon } from '@/assets/icons'
import Input from './Input'

const HeaderForm = () => {
    return (
        <div className='flex items-center gap-[10px]'>
            <Button title='Kategoriya' iconPosition='right' icon={<ArrowDownIcon />} />
            <div className="w-[518px] relative ">
                <Input extraStyle='w-full' type='text' placeholder='What are you looking for?' />
                <Button extrStyle='absolute top-0 bottom-0 right-0 !w-[58px] h-[100%] !p-0' iconPosition='right' icon={<SearchIcon />} />
            </div>
        </div>
    )
}

export default HeaderForm