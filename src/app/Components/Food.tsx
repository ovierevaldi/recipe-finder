'use client'

import { useRouter } from "next/navigation";

type FoodProps = {
    food: FoodEntity;
}

export type FoodEntity = {
    id: number
    title: string;
    image: string;
}

const Food: React.FC<FoodProps> = ({ food }: FoodProps) => {
    const router = useRouter();
    
    const showDetails = () => {
        router.push(`/food/${food.id}?name=${food.title}&image=${food.image}`)
    }

    return (
        <div>
            <div className='bg-[#D9D9D9] p-4 rounded-md'>
                <img src={food.image} alt='food' className='w-full h-36 object-cover rounded-md'/>
            </div>
            <p className='text-center text-xl font-bold'>{food.title}</p>
            <p className='text-center cursor-pointer hover:underline'
                onClick={showDetails}>
                Details
            </p>
        </div>
    )
};

export default Food;