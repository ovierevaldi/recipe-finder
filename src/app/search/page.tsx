'use client'

import React, { useEffect, useState } from 'react'
import Food, { FoodEntity } from '../Components/Food';
import recipeApi from '../providers/recipe-api';
import { useSearchParams } from 'next/navigation';

const ListFood : React.FC = () => {
  const [listFood, setListFood] = useState<FoodEntity[]>([]);

  const searchedFood = useSearchParams().get('food');
  const isHalal = useSearchParams().get('isHalal');

  //#region Api Call
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findRecipe = async () => {
      if(searchedFood){
        try {
          setIsLoading(true);

          const result = await recipeApi().searchRecipe(searchedFood, isHalal === 'true' ? true: false);
  
          if(result){
            setListFood(result);
          }
  
        } catch (error) {
          console.log(error)        
        } finally{
          setIsLoading(false);
        }
      }
    };

    findRecipe();
  }, [searchedFood])

  //#endregion

  return (
    
    isLoading ?

    <p className='text-lg text-center'>Loading...</p>
    
    :

    <div className='grid grid-cols-3 gap-8'>
      {
        listFood.map((food) => <Food food={food} key={food.id}/>)
      }
    </div>
  )
};

export default ListFood