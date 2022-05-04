import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../constants/colors';
import sizes from '../constants/sizes';

const styles = StyleSheet.create({
   button : {paddingHorizontal: 16, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
   text: { color: colors.darkerColor},
   separator: {backgroundColor: colors.accent, height: StyleSheet.hairlineWidth, marginHorizontal: 15}
});

export default function Option() {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Themes</Text>
          <AntDesign name='picture' color={colors.accent} size={sizes.button} />
        </TouchableOpacity>

        <View style={styles.separator} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>React Native Basics</Text>
          <AntDesign name='rightcircle' color={colors.accent} size={sizes.button} />
        </TouchableOpacity>

        <View style={styles.separator} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>React Native Example</Text>  
          <AntDesign name='rightcircle' color={colors.accent} size={sizes.button} />
        </TouchableOpacity>
      </SafeAreaView>
    );
}