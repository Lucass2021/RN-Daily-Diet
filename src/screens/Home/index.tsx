import { ButtonCustom } from "@components/ButtonCustom"
import { DietStatusBar } from "@components/DietStatusBar"
import { Header } from "@components/Header"
import { SectionList, Text, View } from "react-native"
import { styles } from "./style"
import { FoodCard } from "@components/FoodCard"
import { useEffect, useState } from "react"
import { theme } from "@theme/index"
import { useNavigation } from "@react-navigation/native"

import { mealGetAll } from "@storage/meal/mealGetAll"
import { foodItem } from "src/@types/foodItem"

export const Home = () => {
  const navigation = useNavigation()
  
  const [mealsData, setMealsData] = useState<foodItem[]>([])
  const [healthyStyle, setHealthyStyle] = useState('')
  const [arrowHealthyStyle, setArrowHealthyStyle] = useState('')
  const [foodAmount, setFoodAmount] = useState(80)
  const [isLoading, setIsLoading] = useState(true)
  
  const handleIsHealthy = () => {
    setHealthyStyle(foodAmount >= 50 ? theme.colors.green_light  : theme.colors.red_light)
    setArrowHealthyStyle(foodAmount >= 50 ? theme.colors.green_dark  : theme.colors.red_dark)
  }

  // const DATA = [
  //     {
  //       date: '30/03/24',
  //       data: [
  //         {
  //           time: '12:00',
  //           foodName: 'Pizza',
  //           isHealthy: false
  //         },
  //         {
  //           time: '08:00',
  //           foodName: 'Chocolate',
  //           isHealthy: false
  //         }
  //       ]
  //     },
  //     {
  //       date: '29/03/24',
  //       data: [
  //         {
  //           time: '10:00',
  //           foodName: 'Chocolate',
  //           isHealthy: false
  //         },
  //         {
  //           time: '12:00',
  //           foodName: 'Fish',
  //           isHealthy: true
  //         },
  //         {
  //           time: '20:00',
  //           foodName: 'Fish',
  //           isHealthy: true
  //         }
  //       ]
  //     },
  //     {
  //       date: '28/03/24',
  //       data: [
  //         {
  //           time: '12:00',
  //           foodName: 'Rice, Beans and beaf',
  //           isHealthy: true
  //         },
  //         {
  //           time: '19:00',
  //           foodName: 'Pastel',
  //           isHealthy: false
  //         },
  //       ]
  //     },
  // ]

  const fetchMeals = async () => {
    try{
      setIsLoading(true)
      const data = await mealGetAll()

      if(data !== undefined){
        setMealsData(data)
        console.log("fetchMeals", data)
      }

    }catch(error){
      console.log("fetchMeals error", error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleIsHealthy()
    fetchMeals()
  }, [])



    return(
        <View>
            <Header
                showBackButton={false}
                foodInDietAmount={foodAmount}
                healthStyleType={healthyStyle}
                backButtonColor={arrowHealthyStyle}
            />

            <DietStatusBar
                foodInDietAmount={foodAmount}
                healthStyleType={healthyStyle}
                backButtonColor={arrowHealthyStyle}
                dietData={mealsData}
            />

            <View style={{padding: 24}}>
                <Text style={{marginBottom: 20}}>
                    Meals
                </Text>
                <ButtonCustom
                    customIcon="add"
                    buttonText="New Meal"
                    isDark={true}
                    customFunction={() => navigation.navigate('DietManager', {foodAmount, mealsData, actionType: { type: 'add' }})}
                    
                />
            </View>

                <SectionList
                    sections={mealsData}
                    renderItem={({item}) =>
                        <FoodCard
                            time={item.time}
                            foodName={item.foodName}
                            isHealthy={item.isHealthy}
                        />
                    }
                    renderSectionHeader={({section: {date}}) => <Text style={styles.foodCardDate}>{date}</Text>}
                    style={styles.foodCardList}
                    contentContainerStyle={{ paddingBottom: 400 }}
                />
        </View>
    )
}