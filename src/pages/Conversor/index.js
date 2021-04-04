import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';
import { parse } from '@babel/core';

const massa = ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'kg', 'lbs'];
const comprimento = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'];
const tempo = ['s', 'min', 'h'];
const velocidade = ['m/s', 'km/h'];
const temperatura = ['°C','°F','K'];
const data = [
    {id: 0, label: 'Massa', value: 0},
    {id: 1, label: 'Comprimento', value: 1},
    {id: 2, label: 'Área', value: 2},
    {id: 3, label: 'Volume', value: 3},
    {id: 4, label: 'Velocidade', value: 4},
    {id: 5, label: 'Tempo', value: 5},
    {id: 6, label: 'Temperatura', value: 6},
];

const Conversor = () => {

    const [selectedMeasure, setSelectedMeasure] = useState(0);
    const [initialMeasure, setInitialMeasure] = useState(0);
    const [pressed, setPressed] = useState(null);
    const [finalPressed, setFinalPressed] = useState(null);
    const [hideInput, setHideInput] = useState(false);

    const renderMeasures = (type) => {

        let data = []
        let measures = [];
        let border = "#000";

        switch (type) {
            case 0:
                data = massa;
                break;
        
            case 1:
            case 2:
            case 3:
                data = comprimento;
                break;

            case 4:
                data = velocidade;
                break;

            case 5:
                data = tempo;
                break;

            case 6:
                data = temperatura;

            default:
                break;
        }

        for(let i=0;i<data.length;i++){
            measures.push(
                <TouchableOpacity onPress={() => {setPressed(i)}} style={[styles.measureOption, {marginRight: i==data.length-1 ? 0 : 30, borderColor: pressed==i ? '#fff' : 'transparent'}, {width: selectedMeasure===4 ? 50 : 40}]}>
                    <Text style={styles.textMeasure}>
                        {data[i]}
                    </Text>
                </TouchableOpacity>
            )
        }
    
        return measures;
    }

    const renderFinalMeasures = (type) => {

        let data = []
        let measures = [];
        let border = "#000";

        switch (type) {
            case 0:
                data = massa;
                break;
        
            case 1:
            case 2:
            case 3:
                data = comprimento;
                break;

            case 4:
                data = velocidade;
                break;

            case 5:
                data = tempo;
                break;

            case 6:
                data = temperatura;
                break;

            default:
                break;
        }

        for(let i=0;i<data.length;i++){
            measures.push(
                <TouchableOpacity onPress={() => {setFinalPressed(i)}} style={[styles.measureOption, {marginRight: i==data.length-1 ? 0 : 30, borderColor: finalPressed==i ? '#fff' : 'transparent'}, {width: selectedMeasure===4 ? 50 : 40}]}>
                    <Text style={styles.textMeasure}>
                        {data[i]}
                    </Text>
                </TouchableOpacity>
            )
        }
    
        return measures;
    }
    
    const converteMedidas = (valorInicial, medidaInicial, medidaFinal, tipo, dimension) => {
        let indexInicial = medidaInicial+1;
        let indexFinal = medidaFinal+1;
        let potencia = 0;
        let valorFinal = 0;
        let medidas = [];
        let dimens = dimension;

        if (tipo === 0) {
            medidas = massa;
        } else if (tipo > 0 && tipo < 4) {
            tipo === 2 ? dimens = 2 : null;
            tipo === 3 ? dimens = 3 : null;
            medidas = comprimento;
        } else if (tipo === 4) {
            if(indexInicial === indexFinal) return valorInicial;

            if(indexInicial === 1){
                return valorInicial * 3.6;
            } else {
                return parseFloat((valorInicial / 3.6).toFixed(3));
            }
        } else if (tipo === 6){
            if(indexInicial === indexFinal) return valorInicial;

            if(indexInicial === 1){
                if(indexFinal === 2){
                    return 1.8*valorInicial + 32; // celsius para farenheit
                } else if (indexFinal === 3){
                    return parseFloat((valorInicial + 273.15).toFixed(3));
                }
            } else if (indexInicial === 2){
                if(indexFinal === 1){
                    return parseFloat(((valorInicial-32)*5/9).toFixed(3));
                } else if(indexFinal === 3){
                    return parseFloat((((valorInicial-32)/1.8)+273.15).toFixed(3));
                }
            } else if (indexInicial === 3){
                if(indexFinal === 1){
                    return indexInicial - 273.15;
                } else if(indexFinal === 2){
                    return parseFloat(((valorInicial-273.15)*1.8)+32).toFixed(3);
                }
            }
        }

        let base = Math.pow(10,dimens);
        
        if (indexInicial < indexFinal) {
            potencia = indexFinal - indexInicial;
            valorFinal = parseInt(valorInicial) / Math.pow(base,potencia);
        }

        if (indexInicial > indexFinal){
            potencia = indexInicial - indexFinal;
            valorFinal = parseInt(valorInicial) * Math.pow(base,potencia);
        }

        if (indexInicial == indexFinal) {
            return valorInicial;
        }
        return valorFinal;
    } 

    return (
        <View>

            <View style={styles.firstComponent}>
                <View style={[styles.dropContainer]} onTouchStart={() => setHideInput(true)}>
                    <DropDownPicker
                        items={data}
                        containerStyle={styles.dropDown}
                        style={{backgroundColor: 'transparent', borderWidth: 0}}
                        placeholder="Massa"
                        placeholderStyle={{fontSize: 18, color: '#fff', textAlign: 'center'}}
                        labelStyle={{color: '#fff', fontSize: 18, textAlign: 'center'}}
                        activeItemStyle={{fontSize: 18}}
                        dropDownStyle={{backgroundColor: 'rgba(255, 255, 255, 0.1)', borderWidth: 0}}
                        arrowColor={'#fff'}
                        onChangeItem={ item => {
                            setHideInput(false);
                            setSelectedMeasure(item.id);
                        }}
                    />
                </View>

                <View>
                    <TextInput
                        style={styles.input}
                        editable={!hideInput}
                        onChangeText={(text) => {setInitialMeasure(text)}}
                        value={10}
                        placeholder={!hideInput ? "30" : ""}
                        keyboardType="numeric"
                    />
                </View>

                <View style={styles.scroll}>
                    <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1, justifyContent: 'center'}}>
                        {renderMeasures(selectedMeasure)}
                    </ScrollView>
                </View>
            </View>

            <View style={styles.secondComponent}>
                    <Text style={styles.output}>
                        {converteMedidas(parseInt(initialMeasure),pressed,finalPressed,selectedMeasure,1)}
                    </Text>
                    <View style={styles.scroll}>
                        <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1, justifyContent: 'center'}}>
                            {renderFinalMeasures(selectedMeasure)}
                        </ScrollView>
                    </View>     
            </View>

        </View>
    )
};

export default Conversor;