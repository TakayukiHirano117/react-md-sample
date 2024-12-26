import { TabsDemo } from '@/components/Templates/TabsDemo'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto container flex flex-col items-center p-8 h-screen'>
        <div className='w-full max-w-[960px] px-4'>
          <TabsDemo />
        </div>
    </div>
  )
}

export default page