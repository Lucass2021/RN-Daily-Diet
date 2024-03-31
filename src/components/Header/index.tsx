import { Alert, Image, Text, TouchableOpacity, View } from "react-native"

import logoImg from "@assets/Logo.png"
import userImg from "@assets/User.png"
import { styles } from "./style"
import { ArrowLeft } from "phosphor-react-native"
import { theme } from "@theme/index"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"

type Props = {
    showBackButton?: boolean,
    healthStyleType: string,
    backButtonColor?: string,
    foodInDietAmount: number,
}

export const Header = ({showBackButton = false, healthStyleType, backButtonColor = theme.colors.gray_2, foodInDietAmount}: Props) => {
    const navigation = useNavigation()

    useEffect(() => {
      }, [foodInDietAmount, healthStyleType, backButtonColor])

    return(
        <View 
            style={[{backgroundColor: showBackButton ? healthStyleType : ''},  styles.container]}
        >

            {showBackButton ?
                <View style={styles.backButton}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <ArrowLeft 
                            size="24" 
                            color={backButtonColor}
                        />
                    </TouchableOpacity>

                    <View style={styles.dietStatusContainer}>
                        <Text style={styles.dietStatus}>{foodInDietAmount}%</Text>
                        <Text style={styles.dietText}>Diet-appropriate meals</Text>
                    </View>
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