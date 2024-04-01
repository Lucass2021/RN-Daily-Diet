import { foodItem } from "./foodItem";

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined
            stats: {
                foodInDietAmount: number;
                dietData: foodItem[]
            }
        }
    }
}