import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContainer: {
        padding: 24,
        marginTop: 20
    },
    halfInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonConfirmTitle: {
        color: theme.colors.gray_2,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.sm,
        marginBottom: 5,
    }
})