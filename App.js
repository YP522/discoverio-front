import React from 'react';
import {Text, View } from 'react-native';
import s from './assets/styles/globalStyles';

import HeaderApp from './parts/HeaderApp';

import FlatButton from './components/interactives/button';
import IconButton from './components/interactives/icons_button';

import MyCheckbox from './components/interactives/checkbox';
import MyLovebox from './components/interactives/lovebox';
import MyPlusbox from './components/interactives/plusbox';

import MyStarbox from './components/interactives/starbox';

import Card from './components/interactives/card';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/interactives/AppNavigator' 

function HomeScreen() {
  return (

    <View>
      <HeaderApp/>
      <View style={s.secondarybackgroundColor}>
        <Text style={[s.backgroundColor, s.fs72, s.p4]}>Hello World !</Text>
      </View>
      <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>Buttons</Text>
      <FlatButton text="Click me !" bkgColor={s.primarybackgroundColor} txtColor={s.foregroundColor} />
      <FlatButton text="Click me !" bkgColor={s.secondarybackgroundColor} txtColor={s.foregroundColor} />
      <FlatButton text="Click me !" bkgColor={s.foregroundColor} txtColor={s.primaryColor} />
      <FlatButton text="Click me !" bkgColor={s.backgroundColor} txtColor={s.primaryColor} />

      <View style={[s.container_auto, s.m4, s.w9]}>

        <MyCheckbox/>
        <MyLovebox/>
        <MyPlusbox/>

      </View>


      {/* <FlatButton text="▩ Roll !" bkgColor={s.foregroundColor} txtColor={s.primaryColor} /> */}
      <IconButton icon_name='die-five' icon_size={48} icon_color="#18206F" text='Roll !' textSize={48} bkgColor={s.foregroundColor} txtColor={s.primaryColor} />
      <MyStarbox/>
      
      <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>Cards</Text>

      <Card bkgColor={s.backgroundColor} txtColor={s.primaryColor} borderColor={s.borderColor}></Card>
      <Card bkgColor={s.backgroundColor} txtColor={s.primaryColor} borderColor={s.borderColor}></Card>
      
      <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>...</Text>              
    </View>
  );
}

function ProfileScreen() {
  return (    
  
    <View>
      <HeaderApp/>
      <View style={s.secondarybackgroundColor}>
        <Text style={[s.backgroundColor, s.fs72, s.p4]}>Hello World !</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
      <AppNavigator />
    {/* </NavigationContainer> */}
  );
}