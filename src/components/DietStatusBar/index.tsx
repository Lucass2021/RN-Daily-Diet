import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { ArrowUpRight } from "phosphor-react-native"
import { theme } from "@theme/index"

type Props = {
    foodInDietAmount?: number
}

export const DietStatusBar = ({foodInDietAmount = 100}: Props) => {
    return(
        <TouchableOpacity
        style={[
            {backgroundColor: foodInDietAmount >= 50 ? theme.colors.green_light  : theme.colors.red_light},  styles.container
        ]}
        activeOpacity={0.7}
        >
            <ArrowUpRight 
                size="24" 
                color={foodInDietAmount >= 50 ? theme.colors.green_dark  : theme.colors.red_dark} 
                style={styles.arrowRight}
            />
            
            <View style={styles.dietInfoContainer}>
                <Text style={styles.dietStatus}>{foodInDietAmount}%</Text>
                <Text style={styles.dietText}>Diet-appropriate meals</Text>
            </View>
        </TouchableOpacity>
    )
}


// Container Color and Arrow color
// dietStatus needs to change