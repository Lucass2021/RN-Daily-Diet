import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: theme.colors.gray_4,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 6,
        marginBottom: 10,
    },
    foodInfo: {
        flexDirection: "row",
        alignItems: 'center'
    },
    foodTime: {
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.xs
    },
    foodName: {
        marginLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: theme.colors.gray_4,
        paddingLeft:10,
        color: theme.colors.gray_2,
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.md
    },
    healthy: {
        width: 14,
        height: 14,
        borderRadius: 50,
    }
})