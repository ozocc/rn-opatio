import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../common/colors'
import { p } from '../common/normalize';

export default class Button extends React.Component {

  render() {
    const {text, type} = this.props
    return (
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    button:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.WHITE,
      borderRadius: 4,
    },
    text: {
      color: colors.SKY,
      fontWeight:"600",
      fontSize: p(16),
      paddingHorizontal: p(40),
      paddingVertical: p(12)
    }
});
