import api from "./api";
import { FoodEntity } from "../Components/Food";

export type FoodIngredientsProp = {
    ingredients: IngredientProp[]
};

type IngredientProp = {
    name: string,
    image: string,
    amount: AmountProp
};

type AmountProp = {
    metric: MeasureProp,
    us: MeasureProp
};

type MeasureProp = {
    unit: string,
    value: number
}

const recipeApi = () => {
    const searchRecipe = async (recipe: string, isHalal: boolean): Promise<FoodEntity[]> => {
        try {
            const excludeIngredients = isHalal ? `pork,bacon,ham,sausage` : ''
            const result = await api.get(process.env.NEXT_PUBLIC_BASE_URL + '/recipes/complexSearch', {
                params: {query: recipe, excludeIngredients: excludeIngredients}
            });
            console.log(result);
            
            if(result.data){
                const list = result.data.results as FoodEntity[];
                const foodList: FoodEntity[] = list.map((data) => ({id: data.id, title: data.title, image: data.image}));
                return foodList;
            }

            else 
                return []

        } catch (error) {
            console.log(error);
            if(error)
                void 0;
            
            throw new Error('Cannot get food')
        }
    };

   
    
    const getFoodRecipeByID = async(id: number): Promise<FoodIngredientsProp | null> => {
        try {
            const response = await api.get(process.env.NEXT_PUBLIC_BASE_URL + `/recipes/${id}/ingredientWidget.json`);
            console.log(response);
            if(response.data){
                
                
                const foodIngredients : FoodIngredientsProp = {
                    ingredients: response.data.ingredients
                };

                return foodIngredients;
            }
            else{
                return null;
            }
        } catch (error) {
            console.log(error);
            if(error)
                void 0;
            throw new Error('Cannot get food ingredients');
        }
    } 

    return {searchRecipe, getFoodRecipeByID}
};

export default recipeApi;