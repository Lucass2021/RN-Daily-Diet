import { Text, TextInput, View } from "react-native"
import { styles } from "./style";

type Props = {
    title: string;
    isTextArea?: boolean
}

export const InputForm = ({title, isTextArea}: Props) => {
    return (
        <View>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput 
                style={[{textAlignVertical: isTextArea ? 'top' : 'center'},styles.input]} 
                multiline={isTextArea ? true : false} 
                numberOfLines = {isTextArea ? 5 : 1}
            />
        </View>
    )
}