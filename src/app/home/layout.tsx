import MainHead from '@/components/MainHeader/MainHead';
import React from 'react'

function RootLayout({
    children,
} : {
    children: React.ReactNode;
}) {
  return (
    <div>
  <MainHead/>    
  {children}
    </div>
  )
}

export default RootLayout
