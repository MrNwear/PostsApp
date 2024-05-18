import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import styles from './style';

interface SepratorLineProps  {
    style?: StyleProp<ViewStyle>;
};
const SepratorLine=(props: SepratorLineProps)=> {
    return <View style={[styles.sepratorLineStyle, props.style]} />;
}


export default SepratorLine;