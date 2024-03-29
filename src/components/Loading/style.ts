import { StyleSheet } from "react-native";
import { theme } from "@theme/index";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    LoadIndicator: {
        color: theme.colors.green_dark,
    }
})