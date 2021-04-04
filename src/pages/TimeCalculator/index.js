import { parse } from '@babel/core';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

const data = [
    {id: 0, label: '+', value: 0},
    {id: 1, label: '-', value: 1},
];

const TimeCalculator = () => {

    const [selectedOperation, setSelectedOperation] = useState(0);

    const [firstHour, setFirstHour] = useState(0);
    const [firstMinute, setFirstMinute] = useState(0);
    const [firstSecond, setFirstSecond] = useState(0);

    const [secondHour, setSecondHour] = useState(0);
    const [secondMinute, setSecondeMinute] = useState(0);
    const [secondSecond, setSecondSecond] = useState(0);

    const [resultHour, setResultHour] = useState(0);
    const [resultMinute, setResultMinute] = useState(0);
    const [resultSecond, setResultSecond] = useState(0);

    const calculateTime = () => {
        let quotient = 0;
        let sum = 0;

        if(firstSecond + secondSecond >= 60){
            sum = firstSecond + secondSecond;
            quotient = parseInt(sum / 60);

            setResultSecond(sum - (quotient * 60));
            setResultMinute(resultMinute + quotient);
        } else {
            setResultSecond(firstSecond + secondSecond);
        }

        /*if(firstMinute + secondMinute >= 60){
            sum = firstMinute + secondMinute;
            quotient = parseInt(sum / 60);
            setResultMinute(sum - (quotient * 60));
            setResultHour(resultHour + quotient);
        } else {
            setResultMinute( resultMinute + firstMinute + secondMinute);
        }*/

        setResultHour(resultHour + firstHour + secondHour);
    }

    return (
        <KeyboardAvoidingView style={styles.main} behavior="padding">
            <View style={styles.firstContainer}>
                <View style={styles.timeInputs}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            value={10}
                            defaultValue={0}
                            placeholder={"00"}
                            placeholderTextColor={'#8e8e8e'}
                            keyboardType="numeric"
                            onChangeText={text => setFirstHour(parseInt(text))}
                        />
                        <Text style={styles.indicator}> h </Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            value={10}
                            placeholder={"00"}
                            placeholderTextColor={'#8e8e8e'}
                            keyboardType="numeric"
                            onChangeText={text => setFirstMinute(parseInt(text))}
                        />
                        <Text style={styles.indicator}> min </Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            value={10}
                            placeholder={"00"}
                            placeholderTextColor={'#8e8e8e'}
                            keyboardType="numeric"
                            onChangeText={text => setFirstSecond(parseInt(text))}
                        />
                        <Text style={styles.indicator}> s</Text>
                    </View>
                </View>

                <View style={styles.containerOperations}>
                    <TouchableOpacity onPress={() => {setSelectedOperation(0)}}>
                        <Text style={[styles.operation, {borderColor: selectedOperation===0 ? '#fff' : 'transparent'}]}>
                            {`\u002b`}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setSelectedOperation(1)}}>
                        <Text style={[styles.operation, {borderColor: selectedOperation===1 ? '#fff' : 'transparent'}]}>
                            {`\u2014`}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.timeInputs}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            value={10}
                            placeholder={"00"}
                            placeholderTextColor={'#8e8e8e'}
                            keyboardType="numeric"
                            onChangeText={text => setSecondHour(parseInt(text))}
                        />
                        <Text style={styles.indicator}> h </Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            value={10}
                            placeholder={"00"}
                            placeholderTextColor={'#8e8e8e'}
                            keyboardType="numeric"
                            onChangeText={text => setSecondeMinute(parseInt(text))}
                        />
                        <Text style={styles.indicator}> min </Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            value={10}
                            placeholder={"00"}
                            placeholderTextColor={'#8e8e8e'}
                            keyboardType="numeric"
                            onChangeText={text => setSecondSecond(parseInt(text))}
                        />
                        <Text style={styles.indicator}> s</Text>
                    </View>
                </View>
            </View>

            <View style={styles.secondContainer}>
                <TouchableOpacity style={styles.buttonEqual} onPress={() => calculateTime()}>
                        <Text style={styles.operation}>{`\u003d`}</Text>
                </TouchableOpacity>

                <View style={styles.timeInputs}>
                    <Text style={styles.indicator}>{resultHour}h {resultMinute}min {resultSecond}s</Text>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
};

export default TimeCalculator;