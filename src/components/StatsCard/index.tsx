import { Text, View } from "react-native"
import { styles } from "./style"
import { useEffect, useState } from "react"
import { theme } from "@theme/index"

type Props = {
    stats: number
    aboutStats: string
    isHealthy: 'healthy' | 'notHealthy' | 'disable'
}

export const StatsCard = ({stats, aboutStats, isHealthy}: Props) => {

    const [isHealthyStyle, setIsHealthyStyle] = useState('')
    const [borderRadiusStyle, setBorderRadiusStyle] = useState(0); 

    const handleHealthyStyle = () => {
        if(isHealthy === 'disable'){
            setIsHealthyStyle(theme.colors.gray_5);
            setBorderRadiusStyle(8)
        } else if(isHealthy === 'healthy'){
            setIsHealthyStyle(theme.colors.green_light);
            setBorderRadiusStyle(8)
        } else if(isHealthy === 'notHealthy'){
            setIsHealthyStyle(theme.colors.red_light);
            setBorderRadiusStyle(8)
        }
    }

    useEffect(() => {
        handleHealthyStyle()
    }, [isHealthy])

    return (
        <View style={[styles.container, { backgroundColor: isHealthyStyle, borderRadius: borderRadiusStyle } ]}>
            <Text style={styles.stats}>{stats}</Text>
            <Text style={styles.aboutStats}>{aboutStats}</Text>
        </View>
    )
}

// Finish design
// Get statscard dinamic data