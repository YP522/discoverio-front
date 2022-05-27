import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import s from './assets/styles/globalStyles';

import HeaderApp from './parts/HeaderApp';
import FlatButton from './components/interactives/button';
import Card from './components/interactives/card';

export default function App() {
  return (

    <View>
      <HeaderApp/>
      <View style={s.secondarybackgroundColor}>
        <Text style={[s.backgroundColor, s.fs72, s.p4]}>Hello World !</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
      <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>Buttons</Text>
      <FlatButton text="Click me !" bkgColor={s.primarybackgroundColor} txtColor={s.foregroundColor} />
      <FlatButton text="Click me !" bkgColor={s.secondarybackgroundColor} txtColor={s.foregroundColor} />
      <FlatButton text="Click me !" bkgColor={s.foregroundbackgroundColor} txtColor={s.primaryColor} />
      <FlatButton text="Click me !" bkgColor={s.backgroundColor} txtColor={s.primaryColor} />

      <FlatButton text="♥" bkgColor={s.foregroundbackgroundColor} txtColor={s.primaryColor} />
      <FlatButton text="+" bkgColor={s.foregroundbackgroundColor} txtColor={s.primaryColor} />
      <FlatButton text="☑" bkgColor={s.foregroundbackgroundColor} txtColor={s.primaryColor} />
      <FlatButton text="▩ Roll !" bkgColor={s.foregroundbackgroundColor} txtColor={s.primaryColor} />
      <FlatButton text="★" bkgColor={s.foregroundbackgroundColor} txtColor={s.primaryColor} />
      
      <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>Cards</Text>

      <Card bkgColor={s.backgroundColor} txtColor={s.primaryColor} borderColor={s.borderColor}></Card>

      
      <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>...</Text>              
    </View>
  );
}