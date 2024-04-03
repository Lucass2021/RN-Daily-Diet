import { Alert, Image, Text, TouchableOpacity, View } from "react-native"

import logoImg from "@assets/Logo.png"
import userImg from "@assets/User.png"
import { styles } from "./style"
import { ArrowLeft } from "phosphor-react-native"
import { theme } from "@theme/index"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { addOrEdit } from "src/@types/addOrEdit"

type Props = {
    showBackButton?: boolean,
    healthStyleType: string,
    backButtonColor?: string,
    foodInDietAmount?: number | string,
}

export const Header = ({showBackButton = false, healthStyleType, backButtonColor = theme.colors.gray_2, foodInDietAmount}: Props) => {
    const navigation = useNavigation()

    useEffect(() => {
      }, [foodInDietAmount, healthStyleType, backButtonColor])

    return(
            <View style={[ {backgroundColor: showBackButton ? healthStyleType : 'none'}, styles.container ]} >

            {showBackButton ?
                <View style={[
                    typeof foodInDietAmount !== 'number' && {flexDirection: 'row', alignItems: 'center'},
                    styles.backButton
                ]}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <ArrowLeft 
                            size="24" 
                            color={backButtonColor}
                        />
                    </TouchableOpacity>

                    {typeof(foodInDietAmount) === 'number' &&
                        <View style={styles.dietStatusContainer}>
                            <Text style={styles.dietStatus}>{foodInDietAmount}%</Text>
                            <Text style={styles.dietText}>Diet-appropriate meals</Text>
                        </View>
                    }
                    {foodInDietAmount === 'add' &&
                        <View style={styles.dietStatusContainer}>
                          <Text style={styles.dietStatusAddOrEdit}>
                                New Meal
                            </Text>
                        </View>
                    }
                    {foodInDietAmount === 'edit' &&
                        <View style={styles.dietStatusContainer}>
                          <Text style={styles.dietStatusAddOrEdit}>
                                Edit Meal
                            </Text>
                        </View>
                    }
                    {foodInDietAmount === 'about' &&
                        <View style={styles.dietStatusContainer}>
                          <Text style={styles.dietStatusAddOrEdit}>
                                Meal
                            </Text>
                        </View>
                    }
                </View> 
             : 
             <>
                    <Image source={logoImg} />
                    <Image source={userImg} />
             </>
            }
        </View>
    )
}