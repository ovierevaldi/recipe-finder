import api from "./api";
import { FoodEntity } from "../Components/Food";


const recipeApi = () => {
    const searchRecipe = async (recipe: string, isHalal: boolean): Promise<FoodEntity[]> => {
        try {
            const excludeIngredients = isHalal ? `pork,bacon,ham,sausage` : ''
            console.log(isHalal)
            const result = await api.get(process.env.NEXT_PUBLIC_BASE_URL + '/recipes/complexSearch', {
                params: {query: recipe, excludeIngredients: excludeIngredients}
            });
            console.log(result);
            
            if(result.data){
                console.log(result.data)
                const foodList: FoodEntity[] = result.data.results.map((data) => ({id: data.id, name: data.title, image: data.image}));
                return foodList;
            }

            else 
                return []

        } catch (error) {
            console.log(error);
            throw new Error('Cannot get food')
        }
    };

    return {searchRecipe}
};

export default recipeApi;