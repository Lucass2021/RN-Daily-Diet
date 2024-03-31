import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backButton: {
        width: "100%",
    },
    dietStatusContainer: {
        alignItems: "center",
    },
    dietStatus: {
        fontSize: theme.fonts.size.xxl,
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold
    },
    dietText: {
        fontSize: theme.fonts.size.sm,
        color: theme.colors.gray_2,
        fontFamily: theme.fonts.family.regular
    }
})