import { Button } from '@/components/ui/button'
import React from 'react'

const SimpleButton = ({ text }: {text: string}) => {
  return (
    <Button className="rounded-full font-bold">{text}</Button>
  )
}

export default SimpleButton