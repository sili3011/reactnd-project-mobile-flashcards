import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FCText from './FCText';
import { FontAwesome5 } from '@expo/vector-icons';

export default function FCButton ({onPressFunction, icon, text, disabled}) {
    return (
        <TouchableOpacity onPress={onPressFunction} style={[styles.item, {backgroundColor: '#000'}]} disabled={disabled}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                { icon !== undefined && icon !== '' && <FontAwesome5 name={icon} style={[{color: '#fff', margin: 5}, disabled ? {color: '#444'} : { color: '#fff'}]} /> }
                <FCText style={ disabled ? {color: '#444'} : { color: '#fff'} }>
                    {text}
                </FCText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  item: {
    backgroundColor: '#444',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25
  },
});