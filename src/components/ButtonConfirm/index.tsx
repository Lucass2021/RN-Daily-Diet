import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { theme } from '@theme/index';
import { useEffect, useState } from 'react';

type Props = {
    text: string;
    isHealthy: boolean;
    customStyle?: StyleProp<ViewStyle>;
    isActive: boolean;
    onPress: () => void;
}

export const ButtonConfirm = ({text, isHealthy, customStyle, isActive, onPress}: Props) => {
    const [customClass, setCustomClass] = useState<StyleProp<ViewStyle>>()

    const handleStyle = () => {
        if (isActive && isHealthy) {
            setCustomClass(null);
            setCustomClass(styles.healthyStyle);
        } else if (isActive && !isHealthy) {
            setCustomClass(null);
            setCustomClass(styles.unHealthyStyle);
        } else {
            setCustomClass(null);
        }
    }

    useEffect(() => {
        handleStyle()
    }, [isActive])

    return (
        <TouchableOpacity style={[styles.container, customStyle, customClass]} activeOpacity={0.7} onPress={onPress}>
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