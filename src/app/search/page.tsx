import React, { Suspense } from 'react'
import ListFood from '../Components/ListFood'

const SearchFoodPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <ListFood />
    </Suspense>
  )
}

export default SearchFoodPage