import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
   button : {paddingHorizontal: 16, paddingVertical: 20},
   text: {backgroundColor: colors.background, color: colors.lightAccent},
   separator: {backgroundColor: colors.accent, height: StyleSheet.hairlineWidth, marginHorizontal: 15}
});

export default function Option() {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Example 1</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Example 2</Text>  
        </TouchableOpacity>
      </SafeAreaView>
    );
}