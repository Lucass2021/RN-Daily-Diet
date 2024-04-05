import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { foodItem } from "src/@types/foodItem";

export async function mealGetAll(){
    try{
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
        const meals: foodItem[] = storage ? JSON.parse(storage) : []
        return meals
    }catch(error){
        console.log("Error mealGetAll", error)
    }
}