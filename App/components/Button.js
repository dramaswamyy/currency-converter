import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    text: {
        color: colors.lightWhite,
        fontSize: 16
    },
    icon: {
        marginRight: 10,
        width: 20,
        height: 16
    }
});

export default function Button({text, onPress}){
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require('../assets/images/reverse.png')} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}