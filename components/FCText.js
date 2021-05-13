import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function FCText ({children, style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
});