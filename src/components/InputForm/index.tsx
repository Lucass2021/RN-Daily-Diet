import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native"
import { styles } from "./style";

type Props = {
    title: string;
    isTextArea?: boolean;
    customStyle?: StyleProp<ViewStyle>
}

export const InputForm = ({title, isTextArea, customStyle}: Props) => {
    return (
        <View style={[customStyle, styles.formContainer]}>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput 
                style={[{textAlignVertical: isTextArea ? 'top' : 'center'},styles.input]} 
                multiline={isTextArea ? true : false} 
                numberOfLines = {isTextArea ? 5 : 1}
            />
        </View>
    )
}