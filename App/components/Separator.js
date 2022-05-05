import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from "../constants/colors";

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.accent, 
        height: StyleSheet.hairlineWidth, 
        marginHorizontal: 15}
});

export const Separator = () => {
    return (
      <View style={styles.separator} />
    );
}