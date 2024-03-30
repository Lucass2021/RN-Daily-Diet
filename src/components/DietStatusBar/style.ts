import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        padding:24,
        marginHorizontal: 24,
        borderRadius: 8,
    },
    arrowRight: {
        position: "absolute",
        right: 10,
        top: 10
    },
    dietInfoContainer: {
        alignItems: "center"
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