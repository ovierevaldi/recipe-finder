'use client'

import recipeApi, { FoodIngredientsProp } from '@/app/providers/recipe-api';
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'

const DetailFood: React.FC = () => {
    const router = useRouter();
    const { id: foodId} = useParams();
    const name = useSearchParams().get('name');
    const image = useSearchParams().get('image')

    const [ingredients, setIngredients] = useState<FoodIngredientsProp | null>();

    const backToDashboard = () => {
        router.push('/')
    };

    useEffect(() => {
        const getIngredients = async () => {
            if(foodId){
              try {
                const result = await recipeApi().getFoodRecipeByID(parseInt(foodId as string));
        
                if(result){
                  setIngredients(result);
                  console.log(result)
                }
        
              } catch (error) {
                    console.log(error)        
              }
            }
          };
      
          getIngredients();

    }, [foodId])

    return (
        <div>
            <p className='text-3xl font-bold text-center mb-8'>{name}</p>

            <div className='grid grid-cols-2 gap-8'>
                <img src={image || 'https://via.placeholder.com/150'} alt='food' className='w-full h-96 object-cover rounded-md'/>
                <div className='space-y-4'>
                    <p className='text-xl font-bold mb-2'>Ingredients:</p>
                    {
                        <Suspense fallback={<div>Loading ingredients...</div>}>
                            <ul className='overflow-auto columns-2'>
                                {
                                    ingredients?.ingredients.map((ingredient, index) => 
                                        <li key={index} className='mb-2 ml-2'>
                                            <span>{index + 1}. </span>
                                            <span className='font-bold'>{ingredient.name}: </span>
                                            <span>{ingredient.amount.metric.value} {ingredient.amount.metric.unit}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </Suspense>
                    }
                    {/* 
                    <div>
                        <p className='text-lg'>Instructions:</p>
                        <p>1. Cook the rice</p>
                        <p>2. Add salt and soy sauce</p>
                        <p>3. Stir it well</p>
                    </div> */}
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