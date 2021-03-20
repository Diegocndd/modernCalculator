import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Calculator = () => {

  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");
  const [isRational1, setIsRational1] = useState(false);
  const [isRational2, setIsRational2] = useState(false);
  const [isCompleted1, setIsCompleted1] = useState(false);

  const actualOperation = (op) => {
    if(isCompleted1){
      completeOperation();
      setOperation(op);
      setIsCompleted1(true);
      setNumber2("0");
    } else {
      setOperation(op);
      setIsCompleted1(true);
      setNumber2("0");
    }
  }

  const completeOperation = () => {
    const fstNumber = parseFloat(number1);
    const sndNumber = parseFloat(number2);

    switch (operation) {
      case 'x':
        setNumber1(fstNumber*sndNumber);
        break;
      case '-':
        setNumber1(fstNumber-sndNumber);
        break;
      case '+':
        setNumber1(fstNumber+sndNumber);
        break;
      case '/':
        setNumber1(fstNumber/sndNumber);
        break;

      default:
        break;
    }

    setNumber2("");
    setOperation("");
    setIsRational1(false);
    setIsRational2(false);
    setIsCompleted1(false);

  }

  const clearAll = () => {
    setIsCompleted1(false);
    setNumber1("0");
    setNumber2("");
    setOperation("");
  }
  
  const cancelEntry = () => {
    if(isCompleted1){
      setNumber2("0");
    } else {
      setNumber1("0");
    }
  }

  const changeSign = () => {
    if (isCompleted1) {
      if (number2[0] != "-") {
        setNumber2("-" + number2);
      } else {
        setNumber2(number2.substr(1));
      }
    } else {
      if (number1[0] != "-") {
        setNumber1("-" + number1);
      } else {
        setNumber1(number1.substr(1));
      }
    }
  }

  const onTouchNumber = (number) => {
    return (
      <TouchableOpacity style={styles.column} onPress={() => {
        let newNumber = "";
        if(isCompleted1){
          if(number2==="0"){
            newNumber = number;
            setNumber2(newNumber);
          } else {
            setNumber2(number2 + number.toString());
          }
        } else {
          if(number1==="0"){
            newNumber = number;
            setNumber1(newNumber);
          } else {
            setNumber1(number1 + number.toString());
          }
        };

      }}>
        <View style={styles.column}>
          <Text style={styles.keyboardText}>
            {number}
          </Text>
        </View>
    </TouchableOpacity>
    );
  }

  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.display}>
        <View style={styles.displayRow1}>
          <Text style={styles.textRow1}>
            { isCompleted1 ? number1 : number2 }
            {' '} {operation}
          </Text>
        </View>

        <View style={styles.displayRow2}>
          <Text style={styles.result}>
              { isCompleted1 ? number2 : number1 }
          </Text>
        </View>

      </View>

      <View style={styles.keyboard}>

        <View style={styles.row}>

          <TouchableOpacity style={styles.column} onPress={() => cancelEntry()}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                CE
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.column} onPress={() => clearAll()}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                C
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.column} onPress={() => {}}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                DEL
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.column} onPress={() => {actualOperation('x')}}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                X
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          {onTouchNumber(7)}

          {onTouchNumber(8)}

          {onTouchNumber(9)}

          <TouchableOpacity style={styles.column} onPress={() => {actualOperation('/')}}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                /
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          {onTouchNumber(4)}

          {onTouchNumber(5)}

          {onTouchNumber(6)}

          <TouchableOpacity style={styles.column} onPress={() => {actualOperation('-')}}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                -
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          {onTouchNumber(1)}

          {onTouchNumber(2)}

          {onTouchNumber(3)}

          <TouchableOpacity style={styles.column} onPress={() => {}}>
            <View style={styles.column}>
              <Text style={styles.keyboardText} onPress={() => {actualOperation('+')}}>
                +
              </Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          <TouchableOpacity style={styles.column} onPress={() => isCompleted1 ? setNumber2(number2 + '0') : setNumber1(number1 + '0')}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                0
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.column} onPress={() => {
            if (isCompleted1 && !isRational2) {
              setNumber2(number2 + '.')
              setIsRational2(true);
            } else if (!isCompleted1 && !isRational1) {
              setNumber1(number1 + '.')
              setIsRational1(true);
            }
          }}
          >
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                .
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.column} onPress={() => changeSign()}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                +/-
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.column} onPress={() => completeOperation()}>
            <View style={styles.column}>
              <Text style={styles.keyboardText}>
                =
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>


    </View>
  )
};

export default Calculator;