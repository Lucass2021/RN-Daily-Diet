import { Alert, Image, TouchableOpacity, View } from "react-native"

import logoImg from "@assets/Logo.png"
import userImg from "@assets/User.png"
import { styles } from "./style"
import { ArrowLeft } from "phosphor-react-native"
import { theme } from "@theme/index"
import { useNavigation } from "@react-navigation/native"

type Props = {
    showBackButton?: boolean,
    backButtonColor?: string
}

export const Header = ({showBackButton = false, backButtonColor = theme.colors.gray_2}: Props) => {
    const navigation = useNavigation()

    return(
        <View style={styles.container}>

            {showBackButton ? 
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <ArrowLeft size="24" color={backButtonColor}/>
                </TouchableOpacity>
             : 
             <>
                    <Image source={logoImg} />
                    <Image source={userImg} />
             </>
            }
        </View>
    )
}