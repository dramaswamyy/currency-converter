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
    containerDisabled: {
        backgroundColor: colors.greyWhite
    },
    button: {
        backgroundColor: colors.lightWhite,
        padding: 15,
        borderRightColor: colors.lavender,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
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
    const containerStyle = [styles.container];
    if(props.editable === false) {
        containerStyle.push(styles.containerDisabled);
    }
    return (
      <View style={containerStyle}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} {...props} />
      </View>
    );
}