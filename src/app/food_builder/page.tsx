'use client';

import { useRouter } from 'next/navigation';
import React, { useId, useState } from 'react';
import { BiPlus, BiSearch } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

const IngredientsInput: React.FC = () => {
  const router = useRouter();

  const isHalalCheckboxID = useId();

  const [ingredientsInputList, setIngredientsInputList] = React.useState<React.FC<IngredientInputProps>[]>([IngredientInput]);
  const [isHalal, setIsHalal] = useState(false);

  const addIngredientInput = () => {
    setIngredientsInputList([...ingredientsInputList, IngredientInput]);
  };

  const removeInput = (selectedIndex: number) => {
    setIngredientsInputList(ingredientsInputList.filter((_, index) => index !== selectedIndex));
  };

  const handleHalalCheckBox = (checked: boolean) => {
    setIsHalal(checked);
  };

  const goToHome = () => {
    router.push('/')
  }
  
  return (
    <div className='grid h-[500px] place-items-center'>
      <p className='text-center text-2xl'>Hi, this feature is still under construction. Thanks for visiting</p>
      <div className='flex justify-center'>
        <button className='bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md' onClick={goToHome}>Back to home</button>
      </div>
    </div>
    // <div className='max-w-md mx-auto p-4 rounded-md space-y-6'>
    //   <p className="text-2xl text-center">Food:</p>

    //   {
    //     ingredientsInputList.map((IngredientInput, index)  => {
    //         return <IngredientInput key={index} requestRemoveInput={() => removeInput(index)}/>
    //     })
    //   }

    //   <button 
    //     className='block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full'
    //     onClick={addIngredientInput}>
    //     <div className='flex justify-center items-center'>
    //         <BiPlus /> <span>Ingredient</span>
    //     </div>
    //   </button>

    //   <label htmlFor={isHalalCheckboxID} className='flex items-center gap-x-2'>
    //     Halal?
    //     <input type='Checkbox' checked={isHalal} onChange={(e) => handleHalalCheckBox(e.target.checked)}/>
    //   </label>

    //   <button
    //     className="block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full">
    //     <div 
    //         className='flex justify-center items-center'
    //         onClick={() => {}}>
    //         <BiSearch /> <span>Search</span>
    //     </div>
    //   </button>
    // </div>
  );
};

type IngredientInputProps = {
  requestRemoveInput: () => void;
};

const IngredientInput: React.FC<IngredientInputProps> = ({ requestRemoveInput } : IngredientInputProps) => {

  const handleRemoveInput = () => {
    requestRemoveInput();
  }
  return(
    <div className='flex justify-center items-center space-x-4'>
      <input
        type="text"
        className='block p-2 text-[#0a0a0a] rounded-md w-full text-center'
        placeholder="Ex: Tomato" />
      <button
        className='block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md'
        onClick={handleRemoveInput}>
        <RiCloseLine className='text-lg'/>
      </button>
    </div>
  )
}

export default IngredientsInput;