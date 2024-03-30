import { theme } from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    foodCardList: {
        paddingHorizontal:24,
    },
    foodCardDate: {
        marginBottom: 10,
        marginTop:20,
        color: theme.colors.gray_1,
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.size.lg
    },
})