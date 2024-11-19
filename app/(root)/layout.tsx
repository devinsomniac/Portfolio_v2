import Header from '@/Components/Header'
import Signature from '@/Components/Signature'
import React from 'react'

const layout = ({children}:Readonly<{children : React.ReactNode}>) => {
  return (
    <div>
        <Header/>
        {children}
        <Signature/>
    </div>
  )
}

export default layout