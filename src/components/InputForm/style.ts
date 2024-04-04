import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContainer: {

    },
    inputTitle: {
        color: theme.colors.gray_2,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.sm,
        marginBottom: 5,
    },
    input: {
        borderWidth:2,
        borderColor: theme.colors.gray_5,
        borderRadius: 6,
        padding: 14,
        marginBottom: 30,
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.size.md,
    }
})