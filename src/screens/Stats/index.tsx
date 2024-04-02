import { Header } from "@components/Header"
import { useRoute } from "@react-navigation/native"
import { theme } from "@theme/index"
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { styles } from "./style"
import { StatsCard } from "@components/StatsCard"
import { foodItem } from "src/@types/foodItem"

type RouteParams = {
    foodInDietAmount: number,
    dietData: foodItem[]
}

export const Stats = () => {
    const route = useRoute()

    const { foodInDietAmount, dietData } = route.params as RouteParams
    const [healthyStyle, setHealthyStyle] = useState('')
    const [arrowHealthyStyle, setArrowHealthyStyle] = useState('')

    const [totalMeals, setTotalMeals] = useState(0)
    const [totalHealthyMeals, setTotalHealthyMeals] = useState(0)
    const [totalUnhealthyMeals, setTotalUnhealthyMeals] = useState(0)

    // console.log("dietData", dietData)

    const getMealStreak = () => {

    }

    const getTotalMeals = () => {
        setTotalMeals(dietData.reduce((total, item) => total + item.data.length, 0))
    }

    const getTotalHealthyMeals = () => {
        let totalHealthyMealsCounter = 0;

        dietData.forEach(dateData => {
          dateData.data.forEach(meal => {
            if (meal.isHealthy) {
                totalHealthyMealsCounter++;
            }
          });
        });
      
        setTotalHealthyMeals(totalHealthyMealsCounter);
    }

    const getTotalUnhealthyMeals = () => {
        let totalHealthyMealsCounter = 0;

        dietData.forEach(dateData => {
          dateData.data.forEach(meal => {
            if (meal.isHealthy === false) {
                totalHealthyMealsCounter++;
            }
          });
        });
      
        setTotalUnhealthyMeals(totalHealthyMealsCounter);
    }
    

    const handleIsHealthy = () => {
        setHealthyStyle(foodInDietAmount >= 50 ? theme.colors.green_light  : theme.colors.red_light)
        setArrowHealthyStyle(foodInDietAmount >= 50 ? theme.colors.green_dark  : theme.colors.red_dark)
    }

    useEffect(() => {
      handleIsHealthy()

      getTotalMeals()
      getTotalHealthyMeals()
      getTotalUnhealthyMeals()
    }, [foodInDietAmount, dietData])

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
                    stats={totalMeals}
                    aboutStats={'Register Meals'}
                    isHealthy={'disable'}
                />

                <View style={styles.halfStatsContainer}>
                    <StatsCard
                        stats={totalHealthyMeals}
                        aboutStats={'Total Healthy Meals'}
                        isHealthy={'healthy'}
                        customStyle={{marginRight: 8}}
                    />

                    <StatsCard
                        stats={totalUnhealthyMeals}
                        aboutStats={'Total Unhealthy Meals'}
                        isHealthy={'notHealthy'}
                        customStyle={{marginLeft: 8}}
                    />
                </View>
            </View>
        </View>
    )
}