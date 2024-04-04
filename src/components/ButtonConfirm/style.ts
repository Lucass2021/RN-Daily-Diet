import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray_5,
        borderRadius: 6,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.sm,
    },
    buttonCircle: {
        width: 14,
        height: 14,
        borderRadius: 50,
        marginRight: 8,
    }
})