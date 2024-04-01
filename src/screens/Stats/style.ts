import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    statsContainer: {
        paddingHorizontal: 24,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: '100%',
    },
    statsTitle: {
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.sm,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 15,
    },
    halfStatsContainer: {
        flexDirection: 'row',
    }
})