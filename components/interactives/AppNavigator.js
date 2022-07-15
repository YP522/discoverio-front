import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';
import {Text, View } from 'react-native';
import HeaderApp from '../../parts/HeaderApp';
import s from '../../assets/styles/globalStyles';
import FlatButton from '../../components/interactives/button';
import IconButton from '../../components/interactives/icons_button';
import MyCheckbox from '../../components/interactives/checkbox';
import Card from '../../components/interactives/card';
import MyLovebox from '../../components/interactives/lovebox';
import MyPlusbox from '../../components/interactives/plusbox';
import MyStarbox from '../../components/interactives/starbox';


import { StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();


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


      <FlatButton text="▩ Roll !" bkgColor={s.foregroundColor} txtColor={s.primaryColor} />
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

const AppNavigator = () => {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={HomeScreen}
        name='Home'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'people-sharp' : 'people-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={ProfileScreen}
        name='Friends'
      />

    </Tab.Navigator>
  );
};

export default AppNavigator;