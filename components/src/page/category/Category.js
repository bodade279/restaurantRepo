import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomArrow from '../../custum-component/custom-arrow/CustomArrow';
import CustomButton from '../../custom-component/custombutton/CustomButton';
import { ageStyles, categoryStyles, usernamestyle } from '@/constants/styles/Styles';

const Category = ({ navigation }) => {
    const [select, setSelect] = useState([null])
    const arr = [
        { id: 1, name: 'Catergory' },
        { id: 2, name: 'Catergory' },
        { id: 3, name: 'Catergory' },
        { id: 4, name: 'Catergory' },
        { id: 5, name: 'Catergory' },
        { id: 6, name: 'Catergory' },
        { id: 7, name: 'Catergory' },
        { id: 8, name: 'Catergory' },
        { id: 9, name: 'Catergory' },
        { id: 10, name: 'Catergory' },
    ]
    const handleBackPress = () => {
        navigation.goBack();
        // Add navigation logic here
    };

    const handleNavigation = () => {
        navigation.navigate('ConfirmLocationPage')
    }


    const handleSelectBox = (id) => {

        if (select.includes(id)) {
            setSelect(select.filter(item => item != id))
        } else {
            setSelect([...select, id])
        }

    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:hp('8.1425%')}} showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={ageStyles.arrowTouch} onPress={()=> navigation.goBack()}>
                    <CustomArrow
                        leftarrow={true}
                        cl={true}
                    />
                </TouchableOpacity>

                <View style={styles.headerView}>
                    <Text style={styles.title}>What are some food {'\n'} categories
                        you enjoy eating</Text>
                    <View style={{ marginTop: hp('7.1116%') }}>
                        {arr.reduce((rows, item, index) => {
                            if (index % 2 === 0) {
                                rows.push([item]);
                            } else {
                                rows[rows.length - 1].push(item);
                            }
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <View key={rowIndex} style={styles.touchableBox}>
                                {row.map((item, colIndex) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={[
                                            categoryStyles.touchableBox1,
                                            {
                                                backgroundColor: select.includes(item.id) ? '#060505' : 'white',
                                                // flex: 1,
                                                marginHorizontal: wp('2%') // Adds spacing between buttons
                                            }
                                        ]}
                                        onPress={() => handleSelectBox(item.id)}
                                    >
                                        <Text style={[categoryStyles.text, { color: select.includes(item.id) ? 'white' : '#060505' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                ))}
                                {row.length === 1 && <View style={{ flex: 1, marginHorizontal: wp('2%') }} />}

                            </View>
                        ))}
                    </View>
                </View>
                </ScrollView>
                <TouchableOpacity style={usernamestyle.button}>
                    <CustomButton
                        width={wp('88.5417%')}
                        height={hp('7.6336%')}
                        title='Continue'
                        backgroundColor={'#FEC946'}
                        borderRadius={wp('2.6042%')}
                        textAlign={'center'}
                        fontSize={wp("4.1667%")}
                        fontFamily='Manrope'
                        color={"#000000"}
                        onPress={handleNavigation}

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
    touchableBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2%')
    },
    backButton: {
        position: 'absolute',
        top: hp('2%'),
        left: wp('5%'),
        zIndex: 1,
    },
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('13.1291%'),
    },
    buttonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: hp('89.0585%')
    },
    title: {
        fontSize: hp('3%'),
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
});

export default Category;
