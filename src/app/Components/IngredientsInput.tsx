'use client';

import React from 'react';
import { BiPlus, BiSearch } from 'react-icons/bi';
import { RiCloseLine } from 'react-icons/ri';

type IngredientsInputProps = {
    requestSearchFood: () => void;
}

const IngredientsInput: React.FC<IngredientsInputProps> = ({ requestSearchFood } : IngredientsInputProps) => {
    const [ingredientsInputList, setIngredientsInputList] = React.useState<React.FC<IngredientInputProps>[]>([IngredientInput]);

    const addIngredientInput = () => {
        setIngredientsInputList([...ingredientsInputList, IngredientInput]);
    };

    const removeInput = (selectedIndex: number) => {
        setIngredientsInputList(ingredientsInputList.filter((_, index) => index !== selectedIndex));
    };

    const searchFood = () => {
        requestSearchFood();
    }
    
    return (
        <div className='max-w-md mx-auto p-4 rounded-md space-y-6'>
            <p className="text-2xl text-center">Enter the ingredients:</p>

            {
                ingredientsInputList.map((IngredientInput, index)  => {
                    return <IngredientInput key={index} requestRemoveInput={() => removeInput(index)}/>
                })
            }

            <button 
                className='block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full'
                onClick={addIngredientInput}>
                <div className='flex justify-center items-center'>
                    <BiPlus /> <span>Ingredient</span>
                </div>
            </button>
            <button
                className="block bg-[#D9D9D9] text-[#0a0a0a] p-2 rounded-md w-full">
                <div 
                    className='flex justify-center items-center'
                    onClick={searchFood}>
                    <BiSearch /> <span>Search   </span>
                </div>
            </button>
        </div>
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