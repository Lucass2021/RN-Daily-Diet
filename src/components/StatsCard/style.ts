import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding:24,
        marginTop:15,
    },
    stats: {
        fontSize: theme.fonts.size.xxl,
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold,
        textAlign: "center"
    },
    aboutStats: {
        fontSize: theme.fonts.size.sm,
        color: theme.colors.gray_2,
        fontFamily: theme.fonts.family.regular,
        textAlign: "center"
    },
})