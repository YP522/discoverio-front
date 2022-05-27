import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import s from '../../assets/styles/globalStyles';

export default function FlatButton({text, bkgColor, txtColor}) {
    return (
        <TouchableOpacity style={[styles.button, bkgColor]}>
            <View style={styles.button}>
                <Text style={[txtColor, s.fs24]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
    }

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 2,
        paddingHorizontal: 4,
        margin: 8,
        alignSelf: 'flex-start'
    }
});