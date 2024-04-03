import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    backButton: {
        width: "100%",
    },
    dietStatusContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    dietStatus: {
        fontSize: theme.fonts.size.xxl,
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold
    },
    dietStatusAddOrEdit: {
        fontSize: theme.fonts.size.lg,
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold,
        marginLeft:100
    },
    dietText: {
        fontSize: theme.fonts.size.sm,
        color: theme.colors.gray_2,
        fontFamily: theme.fonts.family.regular
    }
})