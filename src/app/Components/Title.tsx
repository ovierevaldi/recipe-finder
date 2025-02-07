'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Title: React.FC = () => {

  const router = useRouter();
  const backToHomePage = () => {
    router.push('/')
  };
  
  return (
    <>
      <h1 className="text-5xl text-center mb-8 cursor-pointer" onClick={backToHomePage}>Recipe Finder</h1>
      <p className="text-2xl text-center">Search the ingredients for food you desire!</p>
    </>
  )
}

export default Title