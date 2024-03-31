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

    const handleHealthyStyle = () => {
        if(isHealthy === 'disable'){
            setIsHealthyStyle(theme.colors.gray_5);
        } else if(isHealthy === 'healthy'){
            setIsHealthyStyle(theme.colors.green_light);
        } else if(isHealthy === 'notHealthy'){
            setIsHealthyStyle(theme.colors.red_light);
        }
    }

    useEffect(() => {
        handleHealthyStyle()
    }, [isHealthy])

    return (
        <View style={[styles.container, { backgroundColor: isHealthyStyle, borderRadius: 8 } ]}>
            <Text style={styles.stats}>{stats}</Text>
            <Text style={styles.aboutStats}>{aboutStats}</Text>
        </View>
    )
}

// Finish design
// Get statscard dinamic data