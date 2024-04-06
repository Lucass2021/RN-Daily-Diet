//
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native"
import { styles } from "./style";
import { useState } from "react";

type Props = {
    title: string;
    isTextArea?: boolean;
    customStyle?: StyleProp<ViewStyle>;
    onInputChange : (title: string, value: string) => void
}

export const InputForm = ({title, isTextArea, customStyle, onInputChange }: Props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const formatDate = (text: string) => {
        const cleanedText = text.replace(/\D/g, '');
      
        if (cleanedText.length <= 2) {
          return cleanedText;
        }
        if (cleanedText.length <= 4) {
          return cleanedText.replace(/^(\d{2})/, '$1/');
        }
        return cleanedText.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3').slice(0, 10);
      };

      const formatTime = (text: string) => {
        const cleanedText = text.replace(/\D/g, '');
      
        if (cleanedText.length === 0) {
          return cleanedText;
        }
    
        if (cleanedText.length <= 5) {
          return cleanedText.replace(/^(\d{2})/, '$1:').slice(0, 5);
        }
      
        return cleanedText.slice(0, 5);
      };
      

    const handleChangeText = (text: string, title: string) => {
        if(title === "Name"){
            setName(text);
            onInputChange(title, text);
        }
        if(title === "Description"){
            setDescription(text);
            onInputChange(title, text);
        }
        if(title === "Date"){
            setDate(formatDate(text));
            onInputChange(title, text);
        }
        if(title === "Time"){
            setTime(formatTime(text));
            onInputChange(title, text);
        }
    };

    const handleValue = () => {
        if(title === "Name"){
            return name;
        }
        if(title === "Description"){
            return description;
        }
        if(title === "Date"){
            return date;
        }
        if(title === "Time"){
            return time;
        }
    }


    return (
        <View style={[customStyle, styles.formContainer]}>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput 
                style={[{textAlignVertical: isTextArea ? 'top' : 'center'},styles.input]} 
                multiline={isTextArea ? true : false} 
                numberOfLines = {isTextArea ? 5 : 1}
                onChangeText={(text) => handleChangeText(text, title)}
                value={handleValue()}
            />
        </View>
    )
}

// Improve time format