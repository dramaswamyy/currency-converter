import React from "react";
import { TouchableOpacity, StyleSheet, Text} from "react-native";
import colors from '../constants/colors';

const styles = StyleSheet.create({
    button : {
        paddingHorizontal: 16, 
        paddingVertical: 20, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    text: {
        color: colors.darkerColor
    },
});

export default function RowItem(props) {
    // destructure props
    // TODO check to see if this works. check if default alert appears for second and third button, but not for first.
    const {onPressBehavior = ()=> alert('todo!'), iconRight, children} = props;
    return (
      <TouchableOpacity style={styles.button} onPress={onPressBehavior}>
        <Text style={styles.text}>{children}</Text>
        {iconRight}
      </TouchableOpacity>
    );
}