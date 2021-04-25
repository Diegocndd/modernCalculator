import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import ModalError from './ModalError';
import styles from './styles';

const TimeCalculator = () => {
  const [selectedOperation, setSelectedOperation] = useState(0);
  const [errorSub, setErrorSub] = useState(false);

  const [firstHour, setFirstHour] = useState(0);
  const [firstMinute, setFirstMinute] = useState(0);
  const [firstSecond, setFirstSecond] = useState(0);

  const [secondHour, setSecondHour] = useState(0);
  const [secondMinute, setSecondeMinute] = useState(0);
  const [secondSecond, setSecondSecond] = useState(0);

  const [resultHour, setResultHour] = useState(0);
  const [resultMinute, setResultMinute] = useState(0);
  const [resultSecond, setResultSecond] = useState(0);

  let firstTime = firstHour + ':' + firstMinute + ':' + firstSecond;
  let secondTime = secondHour + ':' + secondMinute + ':' + secondSecond;

  const sumTimes = (start, end) => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let quotient = 0;

    let times1 = start.split(':');
    let times2 = end.split(':');

    let sum = parseInt(times1[2], 10) + parseInt(times2[2], 10);
    let sum2 = parseInt(times1[1], 10) + parseInt(times2[1], 10);

    if (times1[2] + times2[2] >= 60) {
      quotient = parseInt(sum / 60, 10);
      minutes += 1;
      seconds = sum - quotient * 60;
    } else {
      seconds += sum;
    }

    if (times1[1] + times1[1] >= 60) {
      quotient = parseInt(sum2 / 60, 10);
      hours += 1;
      minutes += sum2 - quotient * 60;
    } else {
      minutes += sum2;
    }

    hours += parseInt(times1[0], 10) + parseInt(times2[0], 10);

    setResultHour(hours);
    setResultMinute(minutes);
    setResultSecond(seconds);
  };

  const subTimes = (start, end) => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let quotient = 0;

    let times1 = start.split(':');
    let times2 = end.split(':');

    let subSeconds = parseInt(times1[2], 10) - parseInt(times2[2], 10);
    let subMinutes = parseInt(times1[1], 10) - parseInt(times2[1], 10);
    let subHours = parseInt(times1[0], 10) - parseInt(times2[0], 10);

    if (subSeconds < 0 || subMinutes < 0 || subHours < 0) {
      setErrorSub(true);
      setResultHour(0);
      setResultMinute(0);
      setResultSecond(0);
      return 0;
    } else {
      setErrorSub(false);
    }

    if (subSeconds >= 60) {
      quotient = parseInt(subSeconds / 60, 10);
      minutes += quotient;
      seconds += subSeconds - quotient * 60;
    } else {
      seconds += subSeconds;
    }

    if (subMinutes >= 60) {
      quotient = parseInt(subMinutes / 60, 10);
      hours += quotient;
      minutes += subMinutes - quotient * 60;
    } else {
      minutes += subMinutes;
    }

    hours += subHours;

    setResultHour(hours);
    setResultMinute(minutes);
    setResultSecond(seconds);
  };

  const closeModal = () => {
    setErrorSub(false);
  };

  return (
    <KeyboardAvoidingView style={styles.main} behavior="padding">
      {errorSub ? <ModalError close={closeModal} /> : null}
      <View style={styles.firstContainer}>
        <View style={styles.timeInputs}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={'00'}
              placeholderTextColor={'#8e8e8e'}
              keyboardType="numeric"
              onChangeText={text => setFirstHour(parseInt(text))}
            />
            <Text style={styles.indicator}> h </Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={'00'}
              placeholderTextColor={'#8e8e8e'}
              keyboardType="numeric"
              onChangeText={text => setFirstMinute(parseInt(text))}
            />
            <Text style={styles.indicator}> min </Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={'00'}
              placeholderTextColor={'#8e8e8e'}
              keyboardType="numeric"
              onChangeText={text => setFirstSecond(parseInt(text))}
            />
            <Text style={styles.indicator}> s</Text>
          </View>
        </View>

        <View style={styles.containerOperations}>
          <TouchableOpacity
            onPress={() => {
              setSelectedOperation(0);
            }}>
            <Text
              style={[
                styles.operation,
                {borderColor: selectedOperation === 0 ? '#fff' : 'transparent'},
              ]}>
              {'\u002b'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedOperation(1);
            }}>
            <Text
              style={[
                styles.operation,
                {borderColor: selectedOperation === 1 ? '#fff' : 'transparent'},
              ]}>
              {'\u2014'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timeInputs}>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={'00'}
              placeholderTextColor={'#8e8e8e'}
              keyboardType="numeric"
              onChangeText={text => setSecondHour(parseInt(text))}
            />
            <Text style={styles.indicator}> h </Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={'00'}
              placeholderTextColor={'#8e8e8e'}
              keyboardType="numeric"
              onChangeText={text => setSecondeMinute(parseInt(text))}
            />
            <Text style={styles.indicator}> min </Text>
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder={'00'}
              placeholderTextColor={'#8e8e8e'}
              keyboardType="numeric"
              onChangeText={text => setSecondSecond(parseInt(text))}
            />
            <Text style={styles.indicator}> s</Text>
          </View>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <TouchableOpacity
          style={styles.buttonEqual}
          onPress={() =>
            selectedOperation === 0
              ? sumTimes(firstTime, secondTime)
              : subTimes(firstTime, secondTime)
          }>
          <Text style={styles.operation}>{'\u003d'}</Text>
        </TouchableOpacity>

        <View style={styles.timeInputs}>
          <Text style={styles.indicator}>
            {resultHour}h {resultMinute}min {resultSecond}s
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TimeCalculator;
