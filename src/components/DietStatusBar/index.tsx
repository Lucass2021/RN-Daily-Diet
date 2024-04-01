import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { ArrowUpRight } from "phosphor-react-native"
import { theme } from "@theme/index"
import { useNavigation } from "@react-navigation/native"
import { foodItem } from "src/@types/foodItem"

type Props = {
    healthStyleType: string,
    backButtonColor?: string,
    foodInDietAmount: number,
    dietData: foodItem[]
}

export const DietStatusBar = ({healthStyleType, backButtonColor = theme.colors.gray_2, foodInDietAmount, dietData}: Props) => {
    const navigation = useNavigation()

    return(
        <TouchableOpacity
        style={[
            {backgroundColor: healthStyleType},  styles.container
        ]}
        activeOpacity={0.7}
        onPress={() => navigation.navigate("stats", {foodInDietAmount, dietData})}
        >
            <ArrowUpRight 
                size="24" 
                color={backButtonColor} 
                style={styles.arrowRight}
            />
            
            <View style={styles.dietInfoContainer}>
                <Text style={styles.dietStatus}>{foodInDietAmount}%</Text>
                <Text style={styles.dietText}>Diet-appropriate meals</Text>
            </View>
        </TouchableOpacity>
    )
}