import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    buttonText: {
        fontSize: theme.fonts.size.sm,
        fontFamily: theme.fonts.family.bold
    }
})