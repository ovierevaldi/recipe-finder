'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const DetailFood: React.FC = () => {
    const router = useRouter();

    const backToDashboard = () => {
        router.push('/')
    }

    return (
        <div>
            <div className='grid grid-cols-2 gap-8'>
                <img src='https://via.placeholder.com/150' alt='food' className='w-full h-36 object-cover rounded-md'/>
                <div className='space-y-4'>
                    <div>
                        <p className='text-2xl font-bold'>Nasi Goreng</p>
                        <p>Nasi goreng is an Indonesian rice dish with pieces of meat and vegetables added.</p>
                    </div>
                    <div>
                        <p className='text-lg'>Ingredients:</p>
                        <ul>
                            <li>1. Rice</li>
                            <li>2. Salt</li>
                            <li>3. Soy Sauce</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-lg'>Instructions:</p>
                        <p>1. Cook the rice</p>
                        <p>2. Add salt and soy sauce</p>
                        <p>3. Stir it well</p>
                    </div>
                    <br />
                    <br />
                    
                    <button className='block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full'>
                        <div className='flex justify-center items-center' onClick={backToDashboard}>
                            <span>Back</span>
                        </div>  
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailFood