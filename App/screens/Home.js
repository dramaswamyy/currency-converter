import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightAccent
    }
});

export default () => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={colors.lightAccent} />
      </View>
)
};