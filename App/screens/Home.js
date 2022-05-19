import React from 'react';
import {View, StatusBar, StyleSheet, Image, Dimensions, Text} from 'react-native';
import {format} from 'date-fns';
import ConversionInput from '../components/ConversionInput';
import Button from '../components/Button';
import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkPurple,
        justifyContent: 'center'
    }, 
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    logoBackground: {
      height: screen.width * .45,
      width: screen.width * .45
    },
    logo: {
      position: 'absolute',
      height: screen.width * .25, 
      width: screen.width * .25
    },
    text: {
      textAlign: 'center',
      color: colors.lightWhite
    }, 
    textHeader: {
      textAlign: 'center',
      marginVertical: 20,
      fontWeight: 'bold',
      fontSize: 20,
      color: colors.lightWhite
    }
});

export default () => {
  const conversionBase = 1;
  const conversionTarget = 0.8345;
  const base = 'USD';
  const target = 'GBP';
  const date = new Date();
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={colors.lightWhite} />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/background.png')} 
          style={styles.logoBackground}
          resizeMode='contain'
        />
        <Image 
          source={require('../assets/images/logo.png')}
          style={styles.logo} 
          resizeMode='contain'
        />

      </View>
      <Text style={styles.textHeader}>Currency Converter</Text>
      <ConversionInput 
        buttonText='USD' 
        value='123' // this needs to be value for it to show up as the default
        onButtonPress={()=> alert('todo!')} 
        onChangeText={(text) => console.log('text', text)} // this will concatenate the 'text' and user inputted strings
        keyboardType='numeric'
      />
      <ConversionInput 
        buttonText='GBP' 
        value='123' 
        onButtonPress={()=> alert('todo!')} 
        editable={false}
      />
      <Text style={styles.text}>
        {`${conversionBase} ${base} = ${conversionTarget} ${target} as of ${format(date, 'MMMM do, yyyy')}.`}
      </Text>
      <Button text='Reverse Currencies' onPress={() => alert('todo!')} />
    </View>
)
};