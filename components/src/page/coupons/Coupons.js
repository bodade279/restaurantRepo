import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import { ageStyles, categoryStyles, usernamestyle } from '@/constants/styles/Styles';
import Img from '../../../../assets/images/image 26.svg'
import Img1 from '../../../../assets/images/image 26 (1).svg'

const Coupons = ({ navigation }) => {
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const [couponCount, setCouponCount] = useState(1);

    const handleIncrement = () => {
        setCouponCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        if (couponCount > 1) {
            setCouponCount(prevCount => prevCount - 1);
        }
    };
    console.log("heighy", height);
    console.log("width", width);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: hp('20.1425%') }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={[ageStyles.arrowTouch,]} onPress={() => navigation.goBack()}>
                    <CustomArrow
                        leftarrow={true}
                        cl={true}
                    />
                </TouchableOpacity>


                <View style={styles.headerStyle}>
                    <Text style={styles.title}>
                        Start adding coupons {'\n'}


                    </Text>
                    <View style={{ marginTop: hp('1.3129%') }}>
                        <Text style={styles.textStyle}>
                            *swipe left to expand options
                        </Text>
                    </View>
                </View>


                <View style={styles.main}>
                    <View style={styles.subView}>
                        <View style={styles.subView1}>
                            <View style={styles.dashView}>
                                {[...Array(5)].map((_, index) => (
                                    <View key={index} style={styles.dashStyle} />
                                ))}
                            </View>
                            <View style={styles.mainCard}>
                                <View
                                    style={styles.subCard}>
                                    <Text style={styles.textView}>asian</Text>
                                </View>

                                <View style={styles.textStyle}>
                                    <Text style={styles.textDetails}>
                                        Domu Chibi Ramen
                                    </Text>
                                    <Text style={styles.textDetails2}>
                                        1 share = 1 free appetizer
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.btnView}>
                                <CustomButton
                                    width={wp('8%')}
                                    height={hp('11.6%')}
                                    borderRadius={wp('2.4%')}
                                    backgroundColor={'#FEC946'}
                                    title='+'
                                    fontSize={wp('6.1%')}
                                    paddingLeft={0}
                                    paddingRight={wp('1.7%')}
                                    onPress={handleIncrement}
                                />
                                <CustomButton
                                    width={wp('8%')}
                                    height={hp('11.6%')}
                                    borderRadius={wp('2.4%')}
                                    textAlign='center'
                                    color='white'
                                    backgroundColor={'#060505'}
                                    title='!'
                                    fontSize={wp('6.1%')}
                                    paddingLeft={0}
                                    paddingRight={wp('1.7%')}
                                    onPress={handleDecrement}
                                />
                            </View>
                        </View>
                    </View>

                    {[...Array(couponCount)].map((_, index) => (
                        <View key={index} style={styles.cardContainer}>
                            <View style={styles.card}>
                                <View style={styles.cardContent}>
                                    {/* Left Image */}
                                    <Img width={wp('24.3%')} height={hp('10.9%')} />

                                    {/* Dashed Line */}
                                    <View style={styles.dashedLineContainer}>
                                        {[...Array(5)].map((_, index) => (
                                            <View key={index} style={styles.dashedLine} />
                                        ))}
                                    </View>

                                    {/* Right Text Section */}
                                    <View style={styles.textContainer}>
                                        <View style={styles.badge}>
                                            <Text style={styles.badgeText}>asian</Text>
                                        </View>

                                        <View style={styles.textSection}>
                                            <Text style={styles.title1}>Domu Chibi Ramen</Text>
                                            <Text style={styles.subtitle}>1 share = 1 free appetizer</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}

                </View>


            </ScrollView>
            <TouchableOpacity style={usernamestyle.button} >
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
                    onPress={() => navigation.navigate('InitialPage')}


                />

            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    btnView: { flexDirection: 'row', marginLeft: wp('19.4%') },
    textDetails2: {
        fontSize: wp('3.4%'),
        color: "#6F6C6C",
        textAlign: 'left',
        fontFamily: 'Manrope',
    },
    textDetails: {
        fontSize: wp('3.9%'),
        textAlign: 'left',
        fontFamily: 'Manrope',
        color: '#060505',
    },
    textStyle: { marginTop: hp('0.9%') },
    subCard: {
        width: wp('11.2%'),
        height: hp('1.9%'),
        borderRadius: wp('1.2%'),
        backgroundColor: '#060505',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textView: { fontSize: wp('2.4%'), color: "#FDFDFD", textAlign: 'center' },
    stylesCard: { flexDirection: 'column', paddingLeft: wp('6.3%') },
    dashStyle: { width: wp('0.2%'), height: hp('1.9%'), backgroundColor: '#6F6C6C', marginVertical: hp('0.2%') },
    dashView: { flexDirection: 'column', alignItems: 'center', marginHorizontal: wp('2.4%'), paddingTop: hp('0.5%') },
    subView1: { padding: wp('2.4%'), flexDirection: 'row', alignItems: 'center' },
    main: { marginTop: hp('7.1%') },
    headerStyle: { justifyContent: 'center', alignItems: 'center', marginTop: hp('13.1%') },
    textStyle: { fontSize: wp('3.9%'), lineHeight: hp('2.6%'), color: '#060505', fontWeight: '400' },
    subView: {
        width: wp('89.8%'),
        height: hp('15.3%'),
        backgroundColor: '#FDFDFD',
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: hp('0.2%') },
        shadowOpacity: 0.2,
        shadowRadius: wp('1%'),
        elevation: 5,
    },
    backButton: {
        position: 'absolute',
        top: hp('2%'),
        left: wp('5%'),
        zIndex: 1,
    },
    title: {
        fontSize: hp('3%'),
        fontWeight: '700',
        // marginTop: hp('20%'),
        textAlign: 'center',
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
        // fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#F7B603',
        width: wp('90%'),
        height: hp('7%'),
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
        // fontWeight: 'bold',
    },

    cardContainer: {
        marginTop: hp('1.2%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: wp('89.8%'),
        height: hp('15.3%'),
        backgroundColor: 'white',
        opacity: 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: hp('0.2%') },
        shadowOpacity: 0.2,
        shadowRadius: wp('1%'),
        elevation: 5,
    },
    cardContent: {
        padding: wp('2.4%'),
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: wp('24.3%'),
        height: hp('10.9%'),
    },
    dashedLineContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: wp('2.4%'),
        paddingTop: hp('0.5%'),
    },
    dashedLine: {
        width: wp('0.2%'),
        height: hp('1.9%'),
        backgroundColor: '#6F6C6C',
        marginVertical: hp('0.2%'),
    },
    textContainer: {
        flexDirection: 'column',
        paddingLeft: wp('6.3%'),
    },
    badge: {
        width: wp('11.2%'),
        height: hp('1.6%'),
        borderRadius: wp('1.2%'),
        backgroundColor: '#060505',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        fontSize: wp('2.4%'),
        color: "#FDFDFD",
        textAlign: 'center',
    },
    textSection: {
        marginTop: hp('0.9%'),
    },
    title1: {
        fontSize: wp('3.9%'),
        textAlign: 'left',
        fontFamily: 'Manrope',
        color: '#060505',
    },
    subtitle: {
        fontSize: wp('3.4%'),
        color: "#6F6C6C",
        textAlign: 'left',
        fontFamily: 'Manrope',
    },
});

export default Coupons;
