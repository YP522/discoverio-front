import React from 'react';
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native';
import FlatButton from './button';
import s from '../../assets/styles/globalStyles';

export default function Card({bkgColor, borderColor}) {
    return (
        <View style={[styles.card, bkgColor, borderColor]}>
            <View>
                <Text style={[s.primaryColor, s.fs24, s.p4]}>Titre de ma carte</Text>
                <Image source={require('../../assets/images/benoit-deschasaux-E8-giPBa8gs-unsplash.jpg')} style={styles.image} /> 
                <Text style={[s.primaryColor, s.fs12, s.p4]}>Et omnia in potestate nostra esse natura liber, libera, libere valeant, sed illis non est in nostra potestate sunt infirmi, sevilis, licet, lex pertinet.</Text>
                   
                <View style={styles.row}>
                    <FlatButton text="♥" bkgColor={s.foregroundColor} txtColor={s.primaryColor} />
                    <FlatButton text="+" bkgColor={s.foregroundColor} txtColor={s.primaryColor} />
                    <FlatButton text="☑" bkgColor={s.foregroundColor} txtColor={s.primaryColor} />      
                </View>
                

            </View>
        </View>
    );
    }

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    card: {
        width: deviceWidth - 50,
        alignSelf: 'center',
        borderRadius: 8,
        borderWidth: 1,
        textAlign: 'center',
    },
    image: {
        height: 200,
        width: deviceWidth-75,
        borderRadius: 8,
        alignContent: 'center',
        alignSelf: 'center',
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
    },
});