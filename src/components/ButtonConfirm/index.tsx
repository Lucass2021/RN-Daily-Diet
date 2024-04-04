import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { theme } from '@theme/index';

type Props = {
    text: string;
    isHealthy: boolean;
    customStyle?: StyleProp<ViewStyle>
}

export const ButtonConfirm = ({text, isHealthy, customStyle}: Props) => {
    return (
        <TouchableOpacity style={[styles.container, customStyle]} activeOpacity={0.7}>
            <View style={
                [styles.buttonCircle, 
                {backgroundColor: isHealthy ? theme.colors.green_dark : theme.colors.red_dark }
            ]}/>
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}