import { Text, TouchableOpacity } from "react-native"
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native"
import { styles } from "./style"
import { theme } from "@theme/index"
import { useEffect, useState } from "react"

type Props = {
    customIcon?: 'add' | 'edit' | 'remove',
    buttonText: string,
    isDark?: boolean
}

export const ButtonCustom = ({customIcon, buttonText, isDark = true}: Props) => {

    const [darkButton, setDarkButton] = useState('');
    const [darkButtonContent, setDarkButtonContent] = useState(isDark ? theme.colors.gray_7 : theme.colors.gray_1);

    const handleIsDark = () => {
        setDarkButton(isDark ? theme.colors.gray_2: theme.colors.gray_7)
        setDarkButtonContent(isDark ? theme.colors.gray_7: theme.colors.gray_1)
    }

    useEffect(() => {
        handleIsDark()
    }, [isDark])

    return(
        <TouchableOpacity 
            style={[
                {backgroundColor: darkButton},
                styles.container
            ]}
            activeOpacity={0.7}
        >
            {customIcon === 'add' ? <Plus size={24} color={darkButtonContent} /> : ''}
            {customIcon === 'edit' ? <PencilSimpleLine size={24} color={darkButtonContent} /> : ''}
            {customIcon === 'remove' ? <Trash size={24} color={darkButtonContent} /> : ''}

            <Text 
                style={[
                    {color: darkButtonContent}, 
                    {marginLeft: customIcon ? 10 : 0},
                    styles.buttonText
                ]}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}