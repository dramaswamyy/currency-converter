import React from 'react';
import {View, StatusBar, StyleSheet, Image, Dimensions} from 'react-native';
import ConversionInput from '../components/ConversionInput';
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
    }
});

export default () => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={colors.lightWhite} />
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
      </View>
)
};