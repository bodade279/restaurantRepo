import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing the icon library
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import { ageStyles } from '@/constants/styles/Styles';

const RefferalCode = ({ navigation }) => {
    const handleBackPress = () => {
        console.log('Back button pressed');
        // Add navigation logic here
    };

    const handleNavigation = () => {
        navigation.navigate('MobileNumberScreen')
    }

    return (
        <View style={styles.container}>
<ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:hp('8.1425%')}}>
            <TouchableOpacity style={{ marginTop: hp('9.1603%'), paddingLeft: wp('6.5%'), position: 'absolute' }}>
                <CustomArrow
                    leftarrow={true}
                    cl={true}
                />
            </TouchableOpacity>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('25.8448%'),}}>

                <Text style={styles.title}>Enter referral code</Text>
                <View style={{ marginTop: hp("6.6158%") }}>
                    <TextInput
                        style={ageStyles.input}
                        placeholderTextColor={'white'}
                    />
                </View>

                <View style={{ marginTop: hp('2.0356%') }}>
                    <Text style={styles.resendText}>
                        Don’t have one?<Text style={styles.resendLink}>  join the waitlist.</Text>
                    </Text>
                </View>


                <TouchableOpacity style={{ marginTop: hp('39.6947%') }}>
                    <CustomButton
                        width={wp('88.5417%')}
                        height={hp('7.6336%')}
                        title='Continue'
                        backgroundColor={'#FEC946'}
                        borderRadius={wp('2.6042%')}
                        textAlign={'center'}
                        fontSize={wp("4.1667%")}
                        color={"#000000"}
                        fontFamily='Manrope'
                        onPress={handleNavigation}

                    />
                </TouchableOpacity>

            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    backButton: {
        position: 'absolute',
        top: hp('2%'),
        left: wp('5%'),
        zIndex: 1,
    },
    title: {
        fontSize: hp('3%'),
        // marginTop: hp('20%'),

        fontFamily: 'Manrope',
        // marginBottom: hp('5%'),

    },
    otpInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: wp('2%'),
        width: wp('90%'),
        height: hp('6%'),
        fontSize: hp('3%'),
        marginBottom: hp('2%'),
        backgroundColor: '#000',
        color: '#F7B603',
        letterSpacing: wp('2%'),
    },
    resendText: {
        fontSize: hp('2%'),
        marginBottom: hp('2%'),
        color: 'grey',
        fontFamily: 'Manrope'
    },
    resendLink: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: hp('2%'),
        fontFamily: 'Manrope'
    },
    button: {
        backgroundColor: '#F7B603',
        width: wp('90%'),
        height: hp('7%'),
        position: 'absolute',
        bottom: 0,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('5%'),
        borderRadius: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: hp('2.5%'),
        // fontWeight: 'bold',
    },
});

export default RefferalCode;
