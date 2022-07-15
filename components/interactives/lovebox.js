import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import s from '../../assets/styles/globalStyles';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function MyLovebox() {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked, s.m4]}
      onPress={onCheckmarkPress}>
      {checked && <Ionicons name="heart" size={24} color="#FE5F55" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#5db0cd',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#5db0cd',
  },

  appContainer: {
    flex: 1,
    alignItems: 'center',
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
});