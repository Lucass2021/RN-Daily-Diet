import { ActivityIndicator, View } from "react-native"
import { styles } from "./style"
import { theme } from "@theme/index"

export const Loading = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator 
                color={theme.colors.green_dark}
                size="large"
            />
        </View>
    )
}