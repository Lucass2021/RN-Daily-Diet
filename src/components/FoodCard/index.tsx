import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { theme } from "@theme/index"

type Props = {
    time: string
    foodName: string
    isHealthy?: boolean
}

export const FoodCard = ({time, foodName, isHealthy = false}: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            <View style={styles.foodInfo}>
                <Text style={styles.foodTime}>{time}</Text>
                <Text style={styles.foodName}>{foodName}</Text> 
            </View>
            <View 
                style={[{backgroundColor: isHealthy ? theme.colors.green_mid: theme.colors.red_mid}, styles.healthy]}
                
            >
            </View>
        </TouchableOpacity>
    )
}

// Add "..." when foodName text is to large

