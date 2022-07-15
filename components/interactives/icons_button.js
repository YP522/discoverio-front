import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import s from '../../assets/styles/globalStyles';

import Ionicons from '@expo/vector-icons/Foundation'

export default function IconButton({icon_name, icon_size, icon_color, text, textSize, bkgColor, txtColor}) {
    return (
        <TouchableOpacity style={[styles.button, bkgColor, s.w9]}>
            <View style={[styles.button, s.row, s.m4]}>
                <Ionicons name={icon_name} size={icon_size} color={icon_color} /><Text style={[txtColor, textSize]}>{text}</Text>
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