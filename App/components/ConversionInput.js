import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightWhite,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5
    },
    button: {
        padding: 15,
        borderRightColor: colors.lavender,
        borderRightWidth: 1
    },
    buttonText: {
        color: colors.darkPurple,
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        flex: 1,
        padding: 10,
        color: colors.darkPurple
    }
});
export default function ConversionInput({buttonText, onButtonPress, ...props}) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} {...props} />
      </View>
    );
}