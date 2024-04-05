import { addOrEdit } from "./addOrEdit";
import { foodItem } from "./foodItem";

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            Home: undefined
            Stats: {
                foodInDietAmount: number;
                dietData: foodItem[];
            }
            DietManager: {
                foodAmount: number;
                DATA?: foodItem[];
                mealsData?: foodItem[];
                actionType: addOrEdit;
            }
        }
    }
}