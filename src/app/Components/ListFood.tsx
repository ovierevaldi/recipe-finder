import React from 'react'

type ListFoodProps = {
    requestShowDetails: (id: string) => void;
};

const ListFood : React.FC<ListFoodProps> = ({ requestShowDetails }) => {
  return (
    <div className='grid grid-cols-3 gap-8'>
        <Food food={{id:'ns-gr', name: 'Nasi Goreng', image:'https://via.placeholder.com/150'}} requestShowDetails={requestShowDetails}/>
    </div>
  )
};

type FoodProps = {
    food: FoodEntity;
    requestShowDetails: (id: string) => void;
}

type FoodEntity = {
    id: string
    name: string;
    image: string;
}

const Food: React.FC<FoodProps> = ({ food, requestShowDetails }: FoodProps) => {
    
    const showDetails = () => {
        requestShowDetails(food.id);
    }

    return (
        <div>
            <div className='bg-[#D9D9D9] p-4 rounded-md'>
                <img src={food.image} alt='food' className='w-full h-36 object-cover rounded-md'/>
            </div>
            <p className='text-center text-xl font-bold'>{food.name}</p>
            <p className='text-center cursor-pointer hover:underline'
                onClick={showDetails}>
                Details
            </p>
        </div>
    )
}

export default ListFood