import React from 'react'
import Food from '../Components/Food';

const ListFood : React.FC = () => {
  return (
    <div className='grid grid-cols-3 gap-8'>
        <Food food={{id:'ns-gr', name: 'Nasi Goreng', image:'https://via.placeholder.com/150'}}/>
    </div>
  )
};

export default ListFood