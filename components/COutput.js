import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function COutput( { output } ) {
  return (
   <Pressable style={ styles.cpress }>
      <View style={ styles.coutput }>
      <Text style={ styles.coutputText }>{ output }</Text>
      </View>
   </Pressable>
  );
}

const styles = StyleSheet.create({
  coutput: {
    height: 200,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 10,
    borderWidth: 1
  },
  coutputText: {
    color: 'white',
    fontSize: 100,
    fontFamily: 'Arial'
  },
    cpress: {
      width: '100%'
  }
});

