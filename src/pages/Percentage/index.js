import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

const data = [
    {id: 0, label: '+', value: 0},
    {id: 1, label: '-', value: 1},
];


const Percentage = () => {

    const [fixedValue, setFixedValue] = useState(0);
    const [percentageValue, setPercentageValue] = useState(0);

    const [scdFixedValue, setScdFixedValue] = useState(0);
    const [scdValue, setScdValue] = useState(0);

    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operation, setOperation] = useState(0);

    const firstSituation = () => {
        return parseFloat(((percentageValue/100)*fixedValue).toFixed(2));
    }

    const secondSituation = () => {
        let result;
        result = parseFloat(((scdFixedValue*100) / scdValue).toFixed(2));

        if(isNaN(result) || !isFinite(result)){
            return 0;
        } else {
            return result;
        }
    }

    const thridSituation = () => {
        let result;
        let firstNum = parseInt(firstNumber);
        let secondNum = parseInt(secondNumber);

        if(operation === 0){
            result = parseFloat((firstNum + ((secondNum * firstNumber) / 100)).toFixed(2));
        } else {
            result = parseFloat((firstNum - ((secondNum * firstNumber) / 100)).toFixed(2));
        }

        if (isNaN(result) || !isFinite(result)) {
            return 0;
        } else {
            return result;
        }
    }

    return (
        <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
            <View style={styles.phrase}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {setFirstNumber(text)}}
                    placeholder={"0"}
                    keyboardType="numeric"
                />
                <DropDownPicker
                    items={data}
                    containerStyle={styles.dropDown}
                    style={{backgroundColor: 'transparent', borderWidth: 0, width: 60}}
                    placeholder="+"
                    placeholderStyle={{fontSize: 20, color: '#fff', textAlign: 'center'}}
                    labelStyle={{color: '#fff', fontSize: 20, textAlign: 'center'}}
                    activeItemStyle={{fontSize: 20}}
                    dropDownStyle={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 0}}
                    arrowColor={'transparent'}
                    showArrow={false}
                    onChangeItem={item => setOperation(item.id)}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {setSecondNumber(text)}}
                    placeholder={"0"}
                    keyboardType="numeric"
                />
                <Text style={styles.commonText}> % = {thridSituation()}</Text>
            </View>

            <View style={styles.phrase}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {setPercentageValue(text)}}
                    placeholder={"0"}
                    keyboardType="numeric"
                />
                <Text style={styles.commonText}> % de </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {setFixedValue(text)}}
                    placeholder={"0"}
                    keyboardType="numeric"
                />
                <Text style={styles.commonText}> é {firstSituation()}</Text>
            </View>

            <View style={styles.phrase}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {setScdFixedValue(text)}}
                    placeholder={"0"}
                    keyboardType="numeric"
                />
                <Text style={styles.commonText}> é {secondSituation()}% de </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {setScdValue(text)}}
                    placeholder={"0"}
                    keyboardType="numeric"
                />
            </View>
        </KeyboardAvoidingView>
    )
};

export default Percentage;