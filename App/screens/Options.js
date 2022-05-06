import React from 'react';
import {SafeAreaView, ScrollView, Linking, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import RowItem from '../components/RowItem';
import { Separator } from '../components/Separator';

const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('There is an error with this url.  Please try again later.')
  });
}

export default function Option() {
    return (
      <SafeAreaView style={{flex : 1}}>
        <ScrollView>
          {/** this url will use a default alert */ }
          <RowItem iconRight={<AntDesign name='picture' color={colors.accent} size={sizes.button} />}>Themes</RowItem>
          {/** this url should work fine */ }
          <Separator />
          <RowItem iconRight={<AntDesign name='rightcircle' color={colors.accent} size={sizes.button} />} onPressBehavior={()=> openURL('https://learn.reactnativeschool.com/')}>Themes</RowItem>
          {/** this url will throw an alert error */ }
          <Separator />
          <RowItem iconRight={<AntDesign name='rightcircle' color={colors.accent} size={sizes.button} />} onPressBehavior={()=> openURL('httpsll://learn.reactnativeschool.com/')}>Themes</RowItem>
        </ScrollView>
      </SafeAreaView>
    );
}