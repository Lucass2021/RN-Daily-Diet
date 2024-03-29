import { ActivityIndicator, View } from "react-native"
import { styles } from "./style"
import { theme } from "../../theme"

export const Loading = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator 
                color={theme.colors.green_600}
                size="large"
            />
        </View>
    )
}