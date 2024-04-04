import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        padding: 24,
        marginTop: 20,
        flex: 1
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
    },
    buttonContainer: {
        padding: 24,
        marginBottom:20
    }
})