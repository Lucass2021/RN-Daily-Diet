import { Header } from "@components/Header"
import { InputForm } from "@components/InputForm"
import { useRoute } from "@react-navigation/native"
import { theme } from "@theme/index"
import { useEffect, useState } from "react"
import { Keyboard, Text, View } from "react-native"
import { addOrEdit } from "src/@types/addOrEdit"
import { foodItem } from "src/@types/foodItem"
import { styles } from "./style"
import { ButtonCustom } from "@components/ButtonCustom"
import { ButtonConfirm } from "@components/ButtonConfirm"

type RouteParams = {
    foodAmount: number,
    DATA: foodItem[],
    actionType: addOrEdit
}

// Format date and time input content
// Create logic to add new meal in async storage


export const DietManager = () => {
    const route = useRoute()

    const { foodAmount, DATA, actionType } = route.params as RouteParams
    const [healthyStyle, setHealthyStyle] = useState('')
    const [arrowHealthyStyle, setArrowHealthyStyle] = useState('')
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [activeButton, setActiveButton] = useState<string>('');

    const handleIsHealthy = () => {
        setHealthyStyle(foodAmount >= 50 ? theme.colors.green_light  : theme.colors.red_light)
        setArrowHealthyStyle(foodAmount >= 50 ? theme.colors.green_dark  : theme.colors.red_dark)
    }

    useEffect(() => {
        handleIsHealthy()

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
  
      }, [foodAmount, DATA])

      

      const handleSetActiveButton = (buttonName: string) => {
          setActiveButton(buttonName);
      }

    return (
        <View style={styles.container}>
            <Header
                showBackButton={true}
                foodInDietAmount={typeof actionType === 'object' ? actionType.type : actionType}
                healthStyleType={actionType.type === 'add' || actionType.type === 'edit'? theme.colors.gray_5 : healthyStyle}
                backButtonColor={actionType.type === 'add' || actionType.type === 'edit' ? theme.colors.gray_2 : arrowHealthyStyle}
            />
            <View style={styles.formContainer}>
                <InputForm title="Name"/>
                <InputForm title="Description" isTextArea={true}/>

                <View style={styles.halfInputContainer}>
                    <InputForm title="Date" customStyle={{marginRight: 8, flex: 1}}/>
                    <InputForm title="Time" customStyle={{marginLeft: 8, flex: 1}}/>
                </View>

                <View>
                    <Text style={styles.buttonConfirmTitle}>Is this meal healthy?</Text>
                    <View style={styles.halfInputContainer}>
                        <ButtonConfirm 
                            text="Yes" 
                            isHealthy={true} 
                            customStyle={{marginRight: 8, flex: 1}}
                            isActive={activeButton === 'Yes'}
                            onPress={() => handleSetActiveButton('Yes')}
                        />
                        <ButtonConfirm 
                            text="No" 
                            isHealthy={false} 
                            customStyle={{marginLeft: 8, flex: 1}}
                            isActive={activeButton === 'No'}
                            onPress={() => handleSetActiveButton('No')}
                        />
                    </View>
                </View>
                
            </View>

            {!keyboardVisible && (
                <View style={styles.buttonContainer}>
                    {false &&
                        <ButtonCustom
                                buttonText={actionType.type === 'add' ? 'Add New Meal' : 'Save Changes'}
                                isDark={true}
                                customFunction={() => {}}
                        />
                    }
                </View>
            )}
        </View>
    )
}