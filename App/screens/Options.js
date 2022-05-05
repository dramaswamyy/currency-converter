import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../constants/colors';
import sizes from '../constants/sizes';
import RowItem from '../components/RowItem';
import { Separator } from '../components/Separator';

export default function Option() {
    return (
      <SafeAreaView style={{flex : 1}}>
        <ScrollView>
          <RowItem iconRight={<AntDesign name='picture' color={colors.accent} size={sizes.button} />} onPressBehavior={()=> alert('different!')}>Themes</RowItem>

          <Separator />
          <RowItem iconRight={<AntDesign name='rightCircle' color={colors.accent} size={sizes.button} />}>Themes</RowItem>

          <Separator />
          <RowItem iconRight={<AntDesign name='rightCircle' color={colors.accent} size={sizes.button} />}>Themes</RowItem>
        </ScrollView>
      </SafeAreaView>
    );
}