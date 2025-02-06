'use client';

import { useState } from "react";
import IngredientsInput from "./Components/IngredientsInput";
import ListFood from "./Components/ListFood";
import DetailFood from "./Components/DetailFood";

export default function Home() {
  const [pageState, setPageState] = useState<'Input' | 'Search' | 'Details'>('Input');

  const onRequestSearchFood = () => { setPageState('Search'); };

  const onRequestShowDetails = (id: string) => { 
    setPageState('Details');
  };

  const setPage = () => {
    switch (pageState) {
      case 'Input':
        return <IngredientsInput requestSearchFood={onRequestSearchFood} />;
      case 'Search':
        return <ListFood requestShowDetails={onRequestShowDetails} />;
      case 'Details':
        return <DetailFood />;
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-5xl text-center mb-8">Recipe Finder</h1>
      <p className="text-2xl text-center">One place to suggest what you can cook based on your ingredients!</p>
      {setPage()}
    </div>
  );
};
