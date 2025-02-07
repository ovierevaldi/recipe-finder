'use client';

import { useRouter } from 'next/navigation';
import React, { useId, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const IngredientsInput: React.FC = () => {
  const router = useRouter();

  const isHalalCheckboxID = useId();

  const [searchedFood, setSearchedFood] = useState('');
  const [isHalal, setIsHalal] = useState(false);

  const searchFood = () => {
    router.push(`/search?food=${searchedFood}&isHalal=${isHalal}`)
  };

  const handleSearch = (keyword: string) => {
    setSearchedFood(keyword)
  };

  const handleHalalCheckBox = (checked: boolean) => {
    setIsHalal(checked);
  } 
  
  return (
    <div className='max-w-md mx-auto p-4 rounded-md space-y-6'>
      <p className="text-2xl text-center">Food:</p>

      <input
        type="text"
        value={searchedFood}
        className='block p-2 text-[#0a0a0a] rounded-md w-full text-center'
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Ex: Fried Rice" />
      {/* {
        ingredientsInputList.map((IngredientInput, index)  => {
            return <IngredientInput key={index} requestRemoveInput={() => removeInput(index)}/>
        })
      } */}

      {/* <button 
        className='block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full'
        onClick={addIngredientInput}>
        <div className='flex justify-center items-center'>
            <BiPlus /> <span>Ingredient</span>
        </div>
      </button> */}

      <label htmlFor={isHalalCheckboxID} className='flex items-center gap-x-2'>
        Halal?
        <input type='Checkbox' checked={isHalal} onChange={(e) => handleHalalCheckBox(e.target.checked)}/>
      </label>

      <button
        className="block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full">
        <div 
            className='flex justify-center items-center'
            onClick={searchFood}>
            <BiSearch /> <span>Search</span>
        </div>
      </button>
    </div>
  );
};


export default IngredientsInput;