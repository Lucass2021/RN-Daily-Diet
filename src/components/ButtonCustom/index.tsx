import { Text, TouchableOpacity } from "react-native"
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native"
import { styles } from "./style"
import { theme } from "@theme/index"

type Props = {
    customIcon?: 'add' | 'edit' | 'remove',
    buttonText: string,
    isDark?: boolean
}

export const ButtonCustom = ({customIcon, buttonText, isDark = true}: Props) => {
    return(
        <TouchableOpacity 
            style={[
                {backgroundColor: isDark ? theme.colors.gray_2: theme.colors.gray_7},
                styles.container
            ]}
            activeOpacity={0.7}
        >
            {customIcon === 'add' ? <Plus size={24} color={isDark ? theme.colors.gray_7: theme.colors.gray_1} /> : ''}
            {customIcon === 'edit' ? <PencilSimpleLine size={24} color={isDark ? theme.colors.gray_7: theme.colors.gray_1} /> : ''}
            {customIcon === 'remove' ? <Trash size={24} color={isDark ? theme.colors.gray_7: theme.colors.gray_1} /> : ''}

            <Text 
                style={[
                    {color: isDark ? theme.colors.gray_7: theme.colors.gray_1}, 
                    {borderColor: isDark ? theme.colors.gray_1: theme.colors.gray_1},
                    {marginLeft: customIcon ? 10 : 0},
                    styles.buttonText
                ]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}