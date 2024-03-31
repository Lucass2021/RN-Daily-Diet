import { Header } from "@components/Header"
import { useRoute } from "@react-navigation/native"
import { theme } from "@theme/index"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"

type RouteParams = {
    foodInDietAmount: number
}

export const Stats = () => {
    const route = useRoute()

    const [healthyStyle, setHealthyStyle] = useState('')
    const [arrowHealthyStyle, setArrowHealthyStyle] = useState('')
    const { foodInDietAmount } = route.params as RouteParams

    const handleIsHealthy = () => {
        setHealthyStyle(foodInDietAmount >= 50 ? theme.colors.green_light  : theme.colors.red_light)
        setArrowHealthyStyle(foodInDietAmount >= 50 ? theme.colors.green_dark  : theme.colors.red_dark)
    }

    useEffect(() => {
      handleIsHealthy()
    }, [foodInDietAmount])

    return(
        <View>
            <Header
                showBackButton={true}
                foodInDietAmount={foodInDietAmount}
                healthStyleType={healthyStyle}
                backButtonColor={arrowHealthyStyle}
            />
        </View>
    )
}