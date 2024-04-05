import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";
import { foodItem } from "src/@types/foodItem";

export async function mealCreate(newMeal: foodItem){
    try {
        const storedMeals = await mealGetAll() || []

        const mealAlreadyExists = storedMeals?.includes(newMeal)
        if(mealAlreadyExists){
            console.log("mealCreate flag - Meal already exist")
        }

        const storage = JSON.stringify([...storedMeals, newMeal])
        await AsyncStorage.setItem(MEAL_COLLECTION, storage)
    } catch (error) {
        console.log("mealsCreate", error)
    }
}