import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing the icon library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from './../../custom-component/custombutton/CustomButton';

const AgeScreen = () => {
    const handleBackPress = () => {
        console.log('Back button pressed');
        // Add navigation logic here
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                <Icon name="arrow-back" size={hp('3%')} color="#000" />
            </TouchableOpacity>

            {/* <CustomArrow leftarrow={true}
                cl={true} /> */}

            {/* AgeScreen Content */}
            <Text style={styles.title}>What's your age</Text>
            <TextInput
                style={styles.AgeScreenInput}
                placeholder="Age"
                placeholderTextColor="#ccc"
                keyboardType="numeric"
                maxLength={6}
            />
            <Text style={styles.resendText}>
                This is to personalize your experience and will
                not be visible on your profil
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // paddingTop: hp('5%'), // For some spacing from the top
    },
    backButton: {
        position: 'absolute',
        top: hp('2%'),
        left: wp('5%'),
        zIndex: 1,
    },
    title: {
        fontSize: hp('3%'),
        marginTop: hp('20%'),

        marginBottom: hp('5%'),
        fontWeight: 'bold',
    },
    AgeScreenInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6%'),
        fontSize: hp('2%'),
        marginBottom: hp('2%'),
        backgroundColor: '#000',
        color: '#fff',
        letterSpacing: wp('2%'),
    },
    resendText: {
        fontSize: hp('2%'),
        marginBottom: hp('2%'),
        color: 'grey',
        textAlign: 'center',
        width: wp('90%'),
    },
    resendLink: {
        color: '#000',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#F7B603',
        width: wp('90%'),
        height: hp('6%'),
        position: 'absolute',
        bottom: 50,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('5%'),
        borderRadius: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
    },
});

export default AgeScreen;
