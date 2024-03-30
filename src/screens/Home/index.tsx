import { ButtonCustom } from "@components/ButtonCustom"
import { DietStatusBar } from "@components/DietStatusBar"
import { Header } from "@components/Header"
import { Text, View } from "react-native"

export const Home = () => {
    return(
        <View>
            <Header
                showBackButton={false}
            />

            <DietStatusBar/>

            <View style={{padding: 24}}>
                <Text style={{marginBottom: 20}}>
                    Meals
                </Text>
                <ButtonCustom
                    customIcon="add"
                    buttonText="New Meal"
                    isDark={true}
                />
            </View>
        </View>
    )
}