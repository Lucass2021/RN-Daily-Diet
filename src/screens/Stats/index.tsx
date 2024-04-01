import { Header } from "@components/Header"
import { useRoute } from "@react-navigation/native"
import { theme } from "@theme/index"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { styles } from "./style"
import { StatsCard } from "@components/StatsCard"

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

            <View style={styles.statsContainer}>
                <Text style={styles.statsTitle}>Statistics</Text>

                <StatsCard
                    stats={22}
                    aboutStats={'Healthy Meal highest streak'}
                    isHealthy={'disable'}
                />
                <StatsCard
                    stats={109}
                    aboutStats={'Register Meals'}
                    isHealthy={'disable'}
                />

                <View style={styles.halfStatsContainer}>
                    <StatsCard
                        stats={99}
                        aboutStats={'Total Healthy Meals'}
                        isHealthy={'healthy'}
                        customStyle={{marginRight: 8}}
                    />

                    <StatsCard
                        stats={10}
                        aboutStats={'Total Unhealthy Meals'}
                        isHealthy={'notHealthy'}
                        customStyle={{marginLeft: 8}}
                    />
                </View>
            </View>
        </View>
    )
}