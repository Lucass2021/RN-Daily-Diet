import { DietStatusBar } from "@components/DietStatusBar"
import { Header } from "@components/Header"
import { View } from "react-native"

export const Home = () => {
    return(
        <View>
            <Header
                showBackButton={false}
            />

            <DietStatusBar/>
        </View>
    )
}