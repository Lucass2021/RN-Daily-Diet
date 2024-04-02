import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DietManager } from "@screens/DietManager";
import { Home } from "@screens/Home";
import { Stats } from "@screens/Stats";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="Stats"
                component={Stats}
            />
            <Screen
                name="DietManager"
                component={DietManager}
            />
        </Navigator>
    )
}