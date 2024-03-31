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
    backButtonColor?: string,
    foodInDietAmount: number,
}

export const Header = ({showBackButton = false, backButtonColor = theme.colors.gray_2, foodInDietAmount}: Props) => {
    const navigation = useNavigation()

    const [healthyStyle, setHealthyStyle] = useState('')
    const [arrowHealthyStyle, setArrowHealthyStyle] = useState('')

    const handleIsHealthy = () => {
        setHealthyStyle(foodInDietAmount >= 50 ? theme.colors.green_light  : theme.colors.red_light)
        setArrowHealthyStyle(foodInDietAmount >= 50 ? theme.colors.green_dark  : theme.colors.red_dark)
    }

    useEffect(() => {
        handleIsHealthy()
    }, [foodInDietAmount, showBackButton])

    return(
        <View 
            style={[{backgroundColor: showBackButton ? healthyStyle : ''},  styles.container]}
        >

            {showBackButton ?
                <View style={styles.backButton}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <ArrowLeft 
                            size="24" 
                            color={arrowHealthyStyle}
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