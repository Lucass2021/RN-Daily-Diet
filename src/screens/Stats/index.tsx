import { Header } from "@components/Header"
import { Text, View } from "react-native"

export const Stats = () => {
    return(
        <View>
            <Header
                showBackButton={true}
                foodInDietAmount={100}
            />
        </View>
    )
}