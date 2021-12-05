import React, { useState } from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function CButton( { input , colour , press} ) {
  return (
   <View style={ styles.cpress }>
      <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'grey'
              : colour
          },
          styles.cbutton ]}
          onPress= { press }
          >
      <Text style={ styles.cinputText }>{ input }</Text>
      </Pressable>
   </View>
  );
}

const styles = StyleSheet.create({
  cbutton: {
    minHeight: 80,
    minWidth: 80,
    maxHeight: 80,
    maxWidth: 80,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 54,
    borderRadius: 100,
    marginVertical: 5
  },
  cinputText: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Arial'
  },
    cpress: {
    width: '25%'
  }
});

